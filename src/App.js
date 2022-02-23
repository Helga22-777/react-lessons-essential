import React from 'react';
import './App.css';
import LifeCycle from './LifeCycle/LifeCycle';
import TranslateByRedux from './TranslateByRedux/TranslateByRedux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        display: false,
        title: ''
    }
}
  showComponent = () => {
    this.setState({ display: !this.state.display });
    console.log(this.state.display);
}
render() {
  return (
    <div className="App">
      <button onClick={this.showComponent}>Click!</button>
        {this.state.display && <LifeCycle />}
     <TranslateByRedux />
    </div>
  )};
}

export default App;
