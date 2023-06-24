import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home/"));
const FindLocation = lazy(() => import("../Pages/FindLocation/"));

export const routes = [
  {
    path: "/",
    element: <FindLocation />,
  },
  {
    path: "/weather",
    element: <Home />,
  },
];
