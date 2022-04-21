import React from "react";
import styles from "./ScssStyle.scss";


class ScssStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            number: '',
        } 
        this.handleChange =this.handleChange.bind(this);
        this.handleChangeNum =this.handleChangeNum.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }
    handleChangeNum(e) {
        this.setState({
            number: e.target.value,
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                    <label> Enter your name and age:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
                    <input type="number" value={this.state.number} onChange={this.handleChangeNum} placeholder="Age" />
                    
                    <p>{this.state.value && this.state.number ? <span>Hello, {this.state.value}! You are  {this.state.number} years old.</span> : <span></span>}</p>
                </form>
            </div>
        )
    }
}
export default ScssStyle;
