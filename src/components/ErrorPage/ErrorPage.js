import React from "react";

export default class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  render() {
    if(this.state.hasError) {
      return(
        <div>
          <h1>Error Page</h1>
          <h2>Такой страницы не существует</h2>
        </div>
      );
     }
     return this.props.children;
    }
}