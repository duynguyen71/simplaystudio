# CLAUDE.md

## Content contracts

- `README.md` is a visitor-facing introduction to Simplay Studio and its games. Keep development and deployment instructions out of it.
- Homepage game thumbnails live in `public/images/`, remain square, and render on a black media background.

## Navigation

- Homepage layout: `src/RootLayout.js` -> `src/pages/HomePage.js` -> `src/components/Hero.js` and `src/components/GameCard.js`.
- Homepage game content and assets: `src/data/game.js` -> `src/hooks/index.js` -> `public/images/`.
- Footer layout and branding: `src/components/FooterV2.js`.

## Validation

- Run `npm run build` before committing website changes.
