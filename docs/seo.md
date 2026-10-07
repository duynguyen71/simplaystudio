# SEO build and deployment

The site stays on GitHub Pages. `npm run build` builds the React app, then
prerenders every route from `src/seo.js` with Chromium. It writes a real
`index.html` in each route directory, route-specific metadata, `sitemap.xml`,
and a noindex `404.html`. Content and links are available without JavaScript;
React still handles interactive navigation after loading.

## Local validation

Use Node.js 22 (the CI version) and npm.

```sh
npm ci
npx playwright install chromium
npm run build
npm run test:seo
```

On Linux, use `npx playwright install --with-deps chromium`. CI installs the
browser, builds, and validates SEO on pull requests. Only a push to `master`
deploys the validated `build/` directory.

## URL policy

- Canonical URLs end in `/`, matching GitHub Pages directory hosting.
- GitHub Pages redirects existing slashless URLs to their directories.
- Legacy `/simplaystudio` client routes canonicalize to the main domain paths;
  they are not included in the sitemap.
- Unknown routes remain HTTP 404 and are noindex, rather than redirecting to
  the homepage. There is no JavaScript 404-to-homepage redirect workaround.
- Game/article routes and metadata are derived from the existing content data.
  Add static informational routes to `seoPages` in `src/seo.js` and link to
  them from the website. Build validation catches orphan pages and duplicates.

## After merging

Verify the deployed page URLs and redirects, then submit
`https://simplaystudio.com/sitemap.xml` in Google Search Console. Use URL
Inspection for the homepage, games, game detail pages, and privacy policy.
Monitor indexing and Core Web Vitals; this change does not claim measured
performance gains or guaranteed search rankings.
