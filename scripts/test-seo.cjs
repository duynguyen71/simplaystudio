const fs = require("node:fs/promises");
const path = require("node:path");
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const { serveBuild } = require("./static-server.cjs");

async function main() {
  const build = path.resolve(__dirname, "../build");
  const server = await serveBuild(build);
  let browser;
  try {
    browser = await chromium.launch();
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(server.url);
    const routes = await page.locator("#seo-routes").evaluate((element) => JSON.parse(element.textContent));
    const sitemap = await fs.readFile(path.join(build, "sitemap.xml"), "utf8");
    const urls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);
    const expectedUrls = routes.map((route) => `https://simplaystudio.com${route === "/" ? "/" : `${route}/`}`);
    assert.deepEqual(urls, expectedUrls, "Sitemap must match all canonical routes");
    assert.match(await fs.readFile(path.join(build, "robots.txt"), "utf8"), /Sitemap: https:\/\/simplaystudio.com\/sitemap.xml/);
    const titles = new Set();
    const descriptions = new Set();
    const linkedPaths = new Set(["/"]);
    for (const url of urls) {
      const pathname = new URL(url).pathname;
      const response = await page.goto(`${server.url}${pathname}`, { waitUntil: "domcontentloaded" });
      assert.equal(response.status(), 200, `${pathname} must serve HTML with HTTP 200`);
      assert.equal(await page.locator("h1").count(), 1, `${pathname} must contain one H1 without JavaScript`);
      assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), url);
      assert.equal(await page.locator('meta[name="robots"]').getAttribute("content"), "index, follow");
      const title = await page.title();
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      assert.ok(title && !titles.has(title), `Missing or duplicate title: ${pathname}`);
      assert.ok(description && !descriptions.has(description), `Missing or duplicate description: ${pathname}`);
      titles.add(title);
      descriptions.add(description);
      assert.equal(await page.locator('meta[property="og:title"]').getAttribute("content"), title);
      assert.equal(await page.locator('meta[property="og:url"]').getAttribute("content"), url);
      assert.equal(await page.locator('meta[name="twitter:description"]').getAttribute("content"), description);
      assert.ok((await page.locator("main").innerText()).trim().length > 30, `Empty page: ${pathname}`);
      assert.equal(await page.locator("main img:not([alt])").count(), 0, `Images need alt text: ${pathname}`);
      assert.ok(await page.locator("h1").evaluate((element) => getComputedStyle(element).fontSize !== "" && element.getBoundingClientRect().height > 0), "Prerendered styles must be available without JavaScript");
      const links = await page.locator('a[href^="/"]').evaluateAll((elements) => elements.map((element) => element.getAttribute("href")));
      links.forEach((link) => linkedPaths.add(link));
    }
    for (const url of urls) assert.ok(linkedPaths.has(new URL(url).pathname), `Orphan page: ${url}`);
    for (const pathname of ["/games/", "/games/Fireworks_Play/", "/privacy/"]) {
      const response = await context.request.get(`${server.url}${pathname.slice(0, -1)}`, { maxRedirects: 0 });
      assert.equal(response.status(), 301, "Slashless routes must redirect to static directories");
      assert.equal(response.headers().location, pathname);
    }
    for (const pathname of ["/missing-page/", "/games/unknown/", "/articles/999/"]) {
      const response = await page.goto(`${server.url}${pathname}`, { waitUntil: "domcontentloaded" });
      assert.equal(response.status(), 404, `Missing pages must stay HTTP 404: ${pathname}`);
      assert.equal(await page.locator('meta[name="robots"]').getAttribute("content"), "noindex, follow");
      assert.equal(await page.locator("h1").count(), 1);
    }
    await context.close();

    // Metadata must also update after client-side navigation, not only direct loads.
    const interactive = await browser.newPage({ reducedMotion: "reduce", viewport: { width: 390, height: 844 } });
    const errors = [];
    interactive.on("pageerror", (error) => errors.push(error.message));
    await interactive.route("**/*", (route) => route.request().url().startsWith(server.url) && route.request().resourceType() !== "media" ? route.continue() : route.abort());
    await interactive.goto(server.url, { waitUntil: "domcontentloaded" });
    await interactive.getByRole("navigation", { name: "Footer navigation" }).getByRole("link", { name: "Games", exact: true }).click();
    await interactive.waitForFunction(() => document.title === "Our Games | Simplay Studio");
    await interactive.getByRole("link", { name: "Open Fireworks Play", exact: true }).click();
    await interactive.waitForFunction(() => document.title === "Fireworks Play | Simplay Studio");
    assert.equal(await interactive.locator('link[rel="canonical"]').getAttribute("href"), "https://simplaystudio.com/games/Fireworks_Play/");
    // Unknown content must not silently become an indexable homepage.
    await interactive.goto(`${server.url}/games/unknown/`, { waitUntil: "domcontentloaded" });
    await interactive.waitForFunction(() => document.querySelector('link[rel="canonical"]')?.dataset.seoPath === "/games/unknown/");
    assert.equal(await interactive.locator('meta[name="robots"]').getAttribute("content"), "noindex, follow");
    await interactive.getByRole("link", { name: "Go to Home", exact: true }).click();
    await interactive.waitForFunction(() => document.title === "Simplay Studio | Mobile & PC Games");
    assert.equal(await interactive.locator('meta[name="robots"]').getAttribute("content"), "index, follow");
    assert.deepEqual(errors, [], "Client navigation must not crash");
    console.log(`SEO checks passed: ${urls.length} static pages, unique metadata, sitemap, internal links, redirects, true 404s, and mobile client navigation.`);
  } finally {
    if (browser) await browser.close();
    await server.close();
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
