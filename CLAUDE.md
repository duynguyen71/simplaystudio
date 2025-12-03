# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for Simplay Studio, a mobile game development company. The site showcases their games and provides download links to iOS and Android app stores. The company develops games like Fireworks Play, Knife Game, and Basketball.

## Development Commands

- `npm start` - Start development server
- `npm run build` - Build for production (uses CI=false to avoid build failures on warnings)
- `npm test` - Run tests with --watchAll=false
- `npm run predeploy` - Run build before deployment
- `npm run deploy` - Deploy to GitHub Pages using gh-pages

## Architecture

### React Router Structure
- Uses React Router v6 with `createBrowserRouter`
- Main routes: `/`, `/articles`, `/games`, `/contact`, `/privacy`, `/release-note`
- Dynamic routes: `/articles/:id`, `/games/:name`
- Duplicate routes under `/simplaystudio` path prefix
- RootLayout component wraps all pages with navigation and footer

### Key Components Structure
- **Layout**: RootLayout.js contains NavBar, Footer, and global UI elements
- **Pages**: HomePage, GamesPage, GameDetailPage, ArticlesPage, etc.
- **Game Components**: GameCard, various game description components in `/components/description/`
- **Data**: Game data centralized in `/src/data/game.js`

### UI Framework
- **Chakra UI**: Primary component library with dark theme configuration
- **Framer Motion**: Animations for page transitions and interactive elements
- **React Slick**: Carousel functionality for image galleries
- **React Icons**: Icon components throughout the app

### Game Data Management
- Game information stored in `/src/data/game.js` with iOS/Android store links
- Each game contains: name, description, images, videos, platform links, and path
- Dynamic component descriptions imported from `/components/description/`

### Styling Approach
- Chakra UI components with custom theming (dark mode by default)
- Custom CSS files for specific components (games-page.css)
- Responsive design using Chakra's responsive props

### Special Features
- Special modal for Fireworks Play multiplayer feature in RootLayout
- Scroll-to-top functionality and intersection observer animations
- Device detection for appropriate app store links (iOS vs Android)
- Lazy loading for video components

## File Organization

- `/src/components/` - Reusable UI components
- `/src/components/description/` - Game-specific description components
- `/src/components/utils/` - Utility components
- `/src/pages/` - Page-level components
- `/src/data/` - Static data files (games, articles, videos)
- `/src/hooks/` - Custom React hooks
- `/public/` - Static assets including game images and videos

## Development Notes

- The project uses Create React App configuration with Webpack
- Deployed to GitHub Pages with custom domain simplaystudio.com
- Images and videos are stored in `/public/` with organized subdirectories
- The build process includes `CI=false` to handle warnings as non-blocking