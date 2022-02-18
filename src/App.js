import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import { ListComponent } from './Components/ListComponent/ListComponent';
import { ListName } from './Components/ListName/ListName';

function App() {
  return (
    <div className="App">
      <ListComponent />
      <ListName />
      <Counter />
    </div>
  );
}

export default App;
