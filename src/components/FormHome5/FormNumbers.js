import React from "react";


class FormNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            newValue: '',
            valueTwo: '',
            newValueTwo: '',
        }
        this.handleChangeHalf=this.handleChangeHalf.bind(this);
        this.handleChangeSmall=this.handleChangeSmall.bind(this);
    }
    handleChangeHalf(e) {
      this.setState({
       value: e.target.value,
       newValue: e.target.value * 0.5,
      });
    }
    handleChangeSmall(e) {
        this.setState({  
         valueTwo: e.target.value,
         newValueTwo: e.target.value * 0.05,
        });
      }
    render() {
        console.log(this.state);
        return (
            <div className="inputs_numbers">
                <label>Enter a number:
                  <input type="number" value={this.state.value} onChange={this.handleChangeHalf} />
                </label>
                <p>Number convert in: <span>{this.state.newValue}</span></p>
                <label>Enter a number: 
                  <input type="number" value={this.state.valueTwo} onChange={this.handleChangeSmall} />
                </label>
                <p>Number convert in: <span>{this.state.newValueTwo}</span></p>
            </div>
        )
    }
}
export default FormNumbers;