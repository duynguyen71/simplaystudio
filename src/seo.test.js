import { getSeoPage, seoPages } from "./seo";
import games from "./data/game";
import articles from "./data/articles";

test("every published game and article has distinct SEO metadata", () => {
  for (const game of games.filter((game) => game.path)) {
    expect(getSeoPage(`/games/${game.path}/`).title).toContain(game.name);
    expect(getSeoPage(`/games/${game.path}/`).noindex).toBeUndefined();
  }
  for (const article of articles) {
    expect(getSeoPage(`/articles/${article.id}/`).description).toBe(article.seoDescription);
  }
  expect(new Set(seoPages.map((page) => page.title)).size).toBe(seoPages.length);
  expect(new Set(seoPages.map((page) => page.description)).size).toBe(seoPages.length);
});

test("legacy and trailing-slash URLs share canonical page metadata", () => {
  expect(getSeoPage("/games/")).toEqual(getSeoPage("/games"));
  expect(getSeoPage("/simplaystudio/games/")).toEqual(getSeoPage("/games"));
  expect(getSeoPage("/simplaystudio/")).toEqual(getSeoPage("/"));
});

test.each(["/missing/", "/games/unknown/", "/articles/999/", "/simplaystudio-other/"])(
  "%s is noindex rather than homepage metadata",
  (pathname) => {
    expect(getSeoPage(pathname).noindex).toBe(true);
    expect(getSeoPage(pathname).title).toBe("Page Not Found | Simplay Studio");
  },
);
