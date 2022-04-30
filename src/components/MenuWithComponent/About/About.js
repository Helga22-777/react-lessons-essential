import React from "react";

export class About extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "",
    }
  }
  render() {
    console.log(this.state.path);
    if(!this.state.path) {
      throw new Error("errrror");
    }
    return (
      <div>
        <h1>About Page</h1>
      </div>
    )
  }
}
