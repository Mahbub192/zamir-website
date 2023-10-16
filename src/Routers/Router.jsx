import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Portfolio from "../pages/Portfolio/GoogleSearchAd/Portfolio";
import FacebookProtfolio from "../pages/Portfolio/FacebookAdd/FacebookProtfolio";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "facebookAds",
        element: <FacebookProtfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
