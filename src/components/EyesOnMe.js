
import React, { Component } from "react";

export default class EyesOnMe extends Component{

  lookedHere = () => {
    console.log("Good!");
  }
  didntLookHere = () => {
    console.log("Hey! Eyes on me!");
  }

  render(){
    return(
      <div>
        <button onFocus={this.lookedHere} onBlur={this.didntLookHere}></button>
      </div>
    );
  }
}
