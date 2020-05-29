import React, { Component } from "react";

export class Keypad extends Component {
  handleKeyUp() {
    console.log("Entering password...");
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleKeyUp}></input>
      </div>
    );
  }
}

export default Keypad;
