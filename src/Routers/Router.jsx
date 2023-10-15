import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";

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
          element: <Portfolio />
        }
      ]
    },
  ]);

  export default router;