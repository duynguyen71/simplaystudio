import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoPage, seoPages, SITE_URL } from "../seo";

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = getSeoPage(pathname);
    const url = `${SITE_URL}${page.path === "/" ? "/" : `${page.path}/`}`;
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.noindex ? "noindex, follow" : "index, follow");
    ["og:title", "twitter:title"].forEach((name) => setMeta(name.startsWith("og:") ? "property" : "name", name, page.title));
    ["og:description", "twitter:description"].forEach((name) => setMeta(name.startsWith("og:") ? "property" : "name", name, page.description));
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:url", url);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    // Build-time prerendering waits for this marker after each route change.
    canonical.dataset.seoPath = pathname;
  }, [pathname]);

  return <script id="seo-routes" type="application/json">{JSON.stringify(seoPages.map((page) => page.path))}</script>;
}
