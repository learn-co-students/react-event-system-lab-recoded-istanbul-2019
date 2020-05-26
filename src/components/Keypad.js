import React, { Component } from 'react';

export default class Keypad extends Component{

  passEntered = () => {
    console.log("Entering password...");
  }

  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.passEntered}></input>
      </div>
    );
  }
}
