import React from 'react';
import './App.css';
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";
import { NavBar } from './components/MenuWithComponent/NavBar/NavBar';
import { Route, Switch } from "react-router-dom";
import { AboutPage2 } from "./components/MenuWithComponent/AboutPage2/AboutPage2";
import { HomePage2 } from "./components/MenuWithComponent/HomePage2/HomePage2";



function App(props) {
  return (
    <div className="App">
    { renderRoutes(routes) }
    <div>
      <h2>Menu 2</h2>
      <NavBar />
      <Switch>
        <Route path="/home" component={HomePage2} />
        <Route path="/aboutpage2" component={AboutPage2} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
