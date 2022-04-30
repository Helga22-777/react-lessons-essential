import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components/MenuWithComponent/NavBar/NavBar';
import { HomePage2 } from './components/MenuWithComponent/HomePage2/HomePage2';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { About } from './components/MenuWithComponent/About/About.js';

function App() {
  return (
    <div className="App">
      <h2>Menu</h2>
      {/* второе задание */}
      <ErrorPage>
        <NavBar />
        <Switch>
          <Route exact  path="/" component={HomePage2} />
          <Route exact  path="/about" component={About} />
        </Switch>
      </ErrorPage>
      {/* первое задание */}
      <ErrorBoundary>
        <Login /> 
      </ErrorBoundary> 
    </div>
  );
}

export default App;
