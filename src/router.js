import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import ArticleList from "./pages/ArticlesPage";
import PrivacyPage from "./pages/PrivacyPage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import NotFoundPage from "./pages/NotFound";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "articles",
        element: <ArticleList />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "games/:name",
        element: <GameDetailPage />,
      },
      {
        path: "games",
        element: <GamesPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/simplaystudio",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "articles",
        element: <ArticleList />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "games/:name",
        element: <GameDetailPage />,
      },
      {
        path: "games",
        element: <GamesPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
