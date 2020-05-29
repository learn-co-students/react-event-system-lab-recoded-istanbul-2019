// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  state = {
    focus: () => {
      console.log("Good!");
    },
    blur: () => {
      console.log("Hey! Eyes on me!");
    },
  };

  render() {
    return (
      <button onFocus={this.state.focus} onBlur={this.state.blur}>
        EyesOnMe
      </button>
    );
  }
}

export default EyesOnMe;
