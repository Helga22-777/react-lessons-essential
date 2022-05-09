import React from "react";
import { ThemeContext } from "../Theme/ThemeContext";

class ThemeProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: this.toggleTheme,
    };
 }
 toggleTheme = e => {
  this.setState({ theme: e.target.checked ? "dark" : "light" });
};
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;