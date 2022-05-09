import React from "react";
import { ThemeConsumer } from "../Theme/ThemeContext";

class ThemeChange extends React.Component {
  render() {
    return (
      <label className="switch">
        <ThemeConsumer>
          {({ toggleTheme, theme }) => (
            <input
            onChange={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
          />
          )}
        </ThemeConsumer>
        <span className="slider round" />
      </label>
    );
  }
}

export default ThemeChange;