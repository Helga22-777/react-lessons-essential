import { HomePage } from "./components/Menu/components/HomePage/HomePage";
import { ContactPage } from "./components/Menu/components/ContactPage/ContactPage";
import { AboutPage } from "./components/Menu/components/AboutPage/AboutPage";
import { MainLayouts } from "././components/layouts/main";
import { AuthLayouts } from "././components/layouts/auth";
import { Login } from "./components/Login/Login";

export const routes =[
  {
    path: "/auth",
    component: AuthLayouts,
    routes: [
      {
        path: "/auth",
        component: ContactPage
      },
    ] 
  },   
  {
    path: "*",
    component: MainLayouts,
    routes: [
      {
        path: "/",
        component: HomePage
      },
      {
        path: "/login",
        component: Login
      },
      {
        path: "/about",
        component: AboutPage
      },
    ] 
  }   
];