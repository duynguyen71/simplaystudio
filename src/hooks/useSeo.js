import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "../data/seo.json";

const normalizePath = (pathname) => {
  const path = pathname.replace(/^\/simplaystudio(?=\/|$)/, "") || "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
};

export const getPageSeo = (pathname) =>
  seo.pages[normalizePath(pathname)] || seo.pages["/"];

const setMeta = (attr, key, value) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
};

const setCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

// Keeps title, description, canonical and social tags in step with the route.
// The same values are written into the static HTML by scripts/prerender.js.
const useSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const page = getPageSeo(pathname);
    const url = `${seo.siteUrl}${path === "/" ? "/" : path}`;
    const image = page.image || seo.defaultImage;

    document.title = page.title;
    setMeta("name", "description", page.description);
    setCanonical(url);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:image", image);
  }, [pathname]);
};

export default useSeo;
