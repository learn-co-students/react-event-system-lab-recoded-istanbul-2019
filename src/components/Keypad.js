// Code Keypad Component Here
// import React from 'react';
import React, { Component } from 'react';


export default class Keypad extends Component{

    enteringPass = () => {

        console.log("Entering password...")
    }
    render() {
        return (
            <input type="password" onKeyUp={this.enteringPass}/>
        )
      }
}