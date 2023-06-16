import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import ArticleList from "./pages/ArticlesPage";
import PrivacyPage from "./pages/PrivacyPage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/articles",
        element: <ArticleList />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "/games",
        element: <GamesPage />,
      },
      {
        path: "/games/:name",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;