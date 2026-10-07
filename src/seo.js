import games from "./data/game";
import articles from "./data/articles";

export const SITE_URL = "https://simplaystudio.com";
export const HOME_DESCRIPTION =
  "Discover mobile and PC games from Simplay Studio: Fireworks Play, Fireworks Show Simulator, Knife Game, and Basketball. Explore our games and official store links.";

export const seoPages = [
  { path: "/", title: "Simplay Studio | Mobile & PC Games", description: HOME_DESCRIPTION },
  { path: "/games", title: "Our Games | Simplay Studio", description: "Explore Simplay Studio's mobile and PC games, including Fireworks Play, Fireworks Show Simulator, Knife Game, and Basketball, with official download links." },
  { path: "/articles", title: "Game News & Updates | Simplay Studio", description: "Read official Simplay Studio game news and Fireworks Play updates. Discover new features, fireworks, props, and improvements for your next show." },
  { path: "/contact", title: "Contact Simplay Studio | Game Support", description: "Get in touch with Simplay Studio for game support and enquiries about our mobile and PC games. Find our contact details and official social channels." },
  { path: "/privacy", title: "Privacy Policy | Simplay Studio", description: "Read Simplay Studio's privacy policy to understand how information is collected, used, and protected when you play our games or use our services." },
  { path: "/knifegame/privacy", title: "Knife Game Privacy Policy | Simplay Studio", description: "Read the Knife Game privacy policy, including information about data collection, advertising, purchases, and your privacy rights when playing the game." },
  { path: "/release-note", title: "Fireworks Play Release Notes | Simplay Studio", description: "Browse official Fireworks Play release notes from Simplay Studio. See the latest game changes, new features, improvements, and fixes by version." },
  ...games.filter((game) => game.path).map((game) => ({
    path: `/games/${game.path}`,
    title: `${game.name} | Simplay Studio`,
    description: game.seoDescription || `${game.shortDescription} ${game.bio}`,
  })),
  ...articles.map((article) => ({
    path: `/articles/${article.id}`,
    title: `${article.seoTitle || article.title} | Simplay Studio`,
    description: article.seoDescription || article.description,
  })),
];

export function getSeoPage(pathname) {
  const path = pathname.replace(/^\/simplaystudio(?=\/|$)/, "").replace(/\/$/, "") || "/";
  return seoPages.find((page) => page.path === path) || {
    path,
    title: "Page Not Found | Simplay Studio",
    description: "This page could not be found. Explore Simplay Studio's games or return to the homepage.",
    noindex: true,
  };
}
