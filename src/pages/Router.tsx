// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LogIn from "./LogIn/LogIn";
import Home from "./Home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <LogIn />
        },
        {
          path: '/home',
          element: <Home />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};
export default Router;