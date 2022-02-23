import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const inState2 = 'Hello!';
const reducer = (state = inState2, action) => {
  switch(action.type) {
    case 'RUS':
      return state = 'Привет!';
      case 'ENG':
        return state = 'Hello!';
      default:
        return state;
  }
}
const store =  createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

