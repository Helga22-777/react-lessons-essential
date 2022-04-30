import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleChangePassword(e) {
    this.setState({
        password: e.target.value
    });
  }
  handleChange(e) {
    this.setState({
        email: e.target.value,
    });
  }
  reset = () => this.setState({
    email: null,
    password: "",
  });
  submit = () => alert(`${this.state.email}   ${this.state.password}`);
  render() {
    if(this.state.email === null) {
      throw new Error('Error!');
    }
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
          <div>
          <button type="button" onClick={this.reset}>Сбросить</button>
          <button type="button" onClick={this.submit}>Войти</button>
          </div>  
          </form>
      </div>
    );
  }
}