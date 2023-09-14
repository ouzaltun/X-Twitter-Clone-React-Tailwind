import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Notifications from "~/pages/notifications";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/notfound";
import MainLayout from "~/layout/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/explore",
        element: <Explore></Explore>,
      },
      {
        path: "/notifications",
        element: <Notifications></Notifications>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default routes;
