import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Notifications from "~/pages/notifications";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/notfound";
import MainLayout from "~/layout/main";
import Profile from "~/pages/profile";
import Messages from "~/pages/messages";
import Lists from "~/pages/lists";
import Bookmarks from "~/pages/bookmarks";

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
        path: "/messages",
        element: <Messages></Messages>,
      },
      {
        path: "/lists",
        element: <Lists></Lists>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "/:slug",
        element: <Profile></Profile>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default routes;
