/**
 * Runs after `react-scripts build` (npm "postbuild").
 *
 * GitHub Pages only serves files that exist, so deep links such as
 * /games/Kill_1_Million_Mosquitoes used to fall through to 404.html and reach
 * crawlers as HTTP 404. For every page in src/data/seo.json this writes a copy
 * of the app shell with that page's title, description, canonical URL, social
 * tags and JSON-LD, plus sitemap.xml.
 *
 * Non-root pages are written as `<path>.html`; GitHub Pages serves
 * /games/Foo from games/Foo.html with a 200 and no trailing-slash redirect.
 */
const fs = require("fs");
const path = require("path");
const seo = require("../src/data/seo.json");

const buildDir = path.join(__dirname, "..", "build");
const shell = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const pageUrl = (route) => `${seo.siteUrl}${route}`;

const jsonLdFor = (route, page) => {
  if (page.game) {
    const game = page.game;
    return {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: game.name,
      url: pageUrl(route),
      description: page.description,
      image: page.image,
      screenshot: game.screenshots,
      gamePlatform: game.platform,
      genre: game.genre,
      sameAs: [game.url],
      publisher: { "@type": "Organization", name: seo.organization.name },
      author: { "@type": "Organization", name: seo.organization.name },
    };
  }
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      ...seo.organization,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seo.siteName,
      url: seo.organization.url,
    },
  ];
};

const headFor = (route, page) => {
  const url = pageUrl(route);
  const image = page.image || seo.defaultImage;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const jsonLd = JSON.stringify(jsonLdFor(route, page)).replace(
    /</g,
    "\\u003c",
  );
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}"/>`,
    `<link rel="canonical" href="${url}"/>`,
    `<meta property="og:type" content="${page.game ? "video.game" : "website"}"/>`,
    `<meta property="og:site_name" content="${escapeHtml(seo.siteName)}"/>`,
    `<meta property="og:url" content="${url}"/>`,
    `<meta property="og:title" content="${title}"/>`,
    `<meta property="og:description" content="${description}"/>`,
    `<meta property="og:image" content="${image}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:url" content="${url}"/>`,
    `<meta name="twitter:title" content="${title}"/>`,
    `<meta name="twitter:description" content="${description}"/>`,
    `<meta name="twitter:image" content="${image}"/>`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join("");
};

// Drop the generic tags from public/index.html so each page has one set.
const stripGenericTags = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");

const base = stripGenericTags(shell);
if (!base.includes("</head>")) {
  throw new Error("prerender: build/index.html has no </head>");
}

const routes = Object.keys(seo.pages);
for (const route of routes) {
  const html = base.replace(
    "</head>",
    `${headFor(route, seo.pages[route])}</head>`,
  );
  const file =
    route === "/"
      ? path.join(buildDir, "index.html")
      : path.join(buildDir, `${route.replace(/^\//, "")}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`prerender: ${route} -> ${path.relative(buildDir, file)}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(
    (route) =>
      `  <url><loc>${pageUrl(route)}</loc><lastmod>${today}</lastmod></url>`,
  ),
  "</urlset>",
  "",
].join("\n");
fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemap);
console.log(`prerender: sitemap.xml (${routes.length} urls)`);
