import ErrorPage from "./components/ErrorPage/ErrorPage";
import { About } from "./components/MenuWithComponent/About/About";
import { HomePage2 } from "./components/MenuWithComponent/HomePage2/HomePage2";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage2
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "*",
    exact: false,
    component: ErrorPage,
  },
];
export default routes;