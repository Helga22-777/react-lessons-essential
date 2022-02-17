import React from 'react';
import './App.css';
import { Example } from './components/Example';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main  from './components/Main/Main';


const element = {
  name: 'Big Text',
  date: '12-12-21'
};

function App() {
  return (
    <div className="App">
      <Example />
      <div>
        <Header color="grey" />
        <Main>
          {element.date} - its second property const 'element'.
        </Main>
          <div>
            <Main>
              <h1>{element.name} - first property const 'element'.</h1>
              </Main> 
          </div>
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
