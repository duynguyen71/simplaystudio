import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import ArticleList from "./pages/ArticlesPage";
import PrivacyPage from "./pages/PrivacyPage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import NotFound from "./pages/NotFound";
import NotFoundPage from "./pages/NotFound";

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
        path: "games",
        element: <GamesPage />,
        children: [
          {
            path: ":name",
            element: <GameDetailPage />,
          },
        ],
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
        path: "games",
        element: <GamesPage />,
        children: [
          {
            path: ":name",
            element: <GameDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
