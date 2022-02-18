import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
        this.countAdd = this.countAdd.bind(this);
        this.countAway = this.countAway.bind(this);
    }
    countAdd () {
        this.setState({count: this.state.count + 1})
    }
    countAway () {
        this.setState({count: this.state.count -1})
    }
    render () {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.countAdd}>+</button>
                <button onClick={this.countAway}>-</button>
            </div>
        )
    }
}

export default Counter;