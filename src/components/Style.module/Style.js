import React from "react";
import styles from "../Style.module/Style.module.css";

class StylingModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            text: '',
            isValid: false,
            isValidName: false,
        } 
        this.handleChange =this.handleChange.bind(this);
        this.handleTAChange =this.handleTAChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
        if(e.target.value === "") {          
            e.target.style.border = "5px solid red";
            this.setState({
                isValidName: false
            })
        } else {
            e.target.style.border = "none";
            this.setState({
                isValidName: true
            })
        }
        
    }
    handleTAChange(e) {
        this.setState({
            text: e.target.value,
        })
        if (e.target.value.length < 50) {
            e.target.style.border = "5px solid red";
            this.setState({
                isValid: false
            });
        } else  {
            e.target.style.border = "none";
            this.setState({
                isValid: true
            })
        }
    }
    handleSubmit(event) {
        event.preventDefault(event);
        (this.state.isValid && this.state.isValidName) ? console.log('Submit Success') : alert('Form is not valid');
    }
    render() {
        return (
            <div>
                <form>
                <label className={styles.label}>
                    Name: 
                    <input className={styles.input} type="text" onChange={this.handleChange} value={this.state.value} />
                    <textarea className={styles.textarea} name="text" id="text" cols="27" rows="6" onChange={this.handleTAChange} value={this.state.text} />
                </label>
                <button disabled={!this.state.isValid} className={styles.btn} type="submit" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        )
    }
}
export default StylingModule;