// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Todos from "../pages/Todos";
import ReactReleases, { releasesLoader } from "../pages/Releases";

// other
import { Route } from "./routes.d";

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "about-route",
    title: "About",
    path: "/about",
    enabled: true,
    component: About,
  },
  {
    key: "todos-route",
    title: "Todos",
    path: "/todos",
    enabled: true,
    component: Todos,
  },
  {
    key: "releases-route",
    title: "Releases",
    path: "/releases",
    enabled: true,
    component: ReactReleases,
    loader: releasesLoader,
  },
];
