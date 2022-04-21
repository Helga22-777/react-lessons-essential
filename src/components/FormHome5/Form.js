import React from "react";


class Form extends React.Component {
    state = {
        value: '',
        textArea: '',
        isSub: false,
    }
    constructor(props) {
        super(props);
        
    this.handleTAChange = this.handleTAChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    handleTAChange(e) {
        this.setState({
            textArea: e.target.value,
        })
    }
   
    handleSubmit(e) {
       e.preventDefault(); 
       this.setState({
       isSub: true,
      });
    }
    render() {
        console.log(this.state);
      //  let file = JSON.stringify(this.state)
        return (
            <div>
                <form>
                    <label>Enter you name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    
                    <label>Enter your Last Name:
                         <textarea value={this.state.textArea} cols="28" rows="6" onChange={this.handleTAChange} ></textarea>
                    </label>

                    <label>
                        <input className="btn" type="submit" value="Send" onClick={this.handleSubmit} />
                    </label>      
                </form>
                <p>{this.state.isSub ? <p>{JSON.stringify(this.state)}</p> : <p>Waiting...</p>}</p>
            </div>
        )
    }
}
export default Form;