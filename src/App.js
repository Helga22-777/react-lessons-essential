import React from 'react';
import './App.css';
import Homework from './components/homework';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Homework />
      </div>
    );
  } 
}

export default App;
