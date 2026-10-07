const fs = require("node:fs/promises");
const path = require("node:path");
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const { serveBuild } = require("./static-server.cjs");

const site = "https://simplaystudio.com";
const build = path.resolve(__dirname, "../build");
const canonicalPath = (route) => route === "/" ? "/" : `${route}/`;

async function main() {
  const server = await serveBuild(build, { fallback: true });
  let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage({ reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    // Rendering must not depend on third-party services, fonts, or large videos.
    await page.route("**/*", (route) => {
      const request = route.request();
      if (!request.url().startsWith(server.url) || request.resourceType() === "media") return route.abort();
      return route.continue();
    });
    await page.goto(server.url, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#seo-routes", { state: "attached" });
    const routes = await page.locator("#seo-routes").evaluate((element) => JSON.parse(element.textContent));
    assert.equal(new Set(routes).size, routes.length, "SEO routes must be unique");
    const snapshots = [];
    for (const route of [...routes, "/__not-found__"]) {
      const pathname = canonicalPath(route);
      await page.goto(`${server.url}${pathname}`, { waitUntil: "domcontentloaded" });
      await page.waitForFunction((pathname) => document.querySelector('link[rel="canonical"]')?.dataset.seoPath === pathname, pathname);
      await page.waitForFunction(() => document.querySelector('a[aria-label="Simplay Studio home"]')?.textContent.includes("Studio"));
      assert.deepEqual(errors, [], `Rendering errors on ${route}`);
      assert.equal(await page.locator("h1").count(), 1, `Expected one H1 on ${route}`);
      const html = await page.evaluate(() => {
        // Emotion writes rules through CSSOM; page.content() alone loses them.
        document.querySelectorAll("style[data-emotion]").forEach((style) => {
          if (style.sheet) style.textContent = Array.from(style.sheet.cssRules, (rule) => rule.cssText).join("\n");
        });
        return `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;
      });
      snapshots.push({ route, html });
    }
    // Don't overwrite the original shell until all routes have rendered successfully.
    for (const { route, html } of snapshots) {
      const file = route === "/__not-found__" ? path.join(build, "404.html") : path.join(build, route.slice(1), "index.html");
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, html);
    }
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${site}${canonicalPath(route)}</loc></url>`).join("\n")}\n</urlset>\n`;
    await fs.writeFile(path.join(build, "sitemap.xml"), sitemap);
    // These files are published directly; Jekyll must not process the snapshots.
    await fs.writeFile(path.join(build, ".nojekyll"), "");
    console.log(`Prerendered ${routes.length} indexable pages, a real 404 page, and sitemap.xml.`);
  } finally {
    if (browser) await browser.close();
    await server.close();
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
