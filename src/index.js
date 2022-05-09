import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { MyContext } from './myContext';

//  const value = {
//   name: 'Alex',
//   age: 24,
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyContext.Provider value={value}> */}
      <App />
    {/* </MyContext.Provider> */}
  </React.StrictMode>
);
