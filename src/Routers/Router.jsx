import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Portfolio from "../pages/Portfolio/GoogleSearchAd/Portfolio";
import FacebookAdd from "../pages/Portfolio/FacebookAdd/FacebookAdd";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path:'portfolio',
          element: <Portfolio />,
        },
        {
          path:'facebookAds',
          element:<FacebookAdd />
        }
      ]
    },
  ]);

  export default router;