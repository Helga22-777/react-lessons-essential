import React from 'react';
import './App.css';
import List1 from './components/LIst1/LIst1';
import faker from  '@faker-js/faker';
import List2 from './components/List2/List2';
import { v4 } from 'uuid';
import Clock from './components/Clock/Clock';


class App extends React.Component {

  state = {
    items: [],
    flag: true,
    value: ''
  }

  constructor(props) {
    super(props);
    for(let i = 0; i < 4000; i++) {
      this.state.items.push({
        id: v4(),
        item: faker.name.findName()
      })
    }
  }
  handleAddItem() {
    const newItem = faker.name.findName();
    this.setState({
      items: [
        {
          item: newItem,
          id: v4(),
        },
        ...this.state.items
      ]
    })
  }
  handleAddItemToEnd() {
    const newItem = faker.name.findName();
    this.setState({
      items: [
        ...this.state.items,
        {
          item: newItem,
          id: v4(),
        },
      ]
    })
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Clock />
        <button onClick={() => this.setState({ flag: !this.state.flag })}>Change</button> 

        <button onClick={this.handleAddItem.bind(this)}>Add item to start</button>

        <button onClick={this.handleAddItemToEnd.bind(this)}>Add item to end</button> 

        <input type='text' value={this.statevalue} onChange={this.handleChange.bind(this)} />
        {this.state.flag 
        ? <List1 items={this.state.items} /> 
        : <List2 items={this.state.items} />}
        
      </div>
    );
  }
}

export default App;
