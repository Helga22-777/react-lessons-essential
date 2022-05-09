import React from 'react';
import './App.css';
import ThemeChange from './components/ThemeChange/ThemeChange';
import { ThemeConsumer } from './components/Theme/ThemeContext';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

class App extends React.Component {
 render() {
  return (
    <div className="App">
      <ThemeProvider>
          <ThemeConsumer>
            {({ theme }) => (
              <div className={theme}>
                <h1>React Context</h1>
                <h3>Theme switcher</h3>
                <ThemeChange />
              </div>
            )}
          </ThemeConsumer>
        </ThemeProvider>
    </div>
    )
  }
}

export default App;
