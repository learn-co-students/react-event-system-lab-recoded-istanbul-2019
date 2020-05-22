// Code Keypad Component Here
import React, { Component } from 'react';
export default class Keypad extends Component {


    keyUpHandelr = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.keyUpHandelr} type="password"></input>
        )
    }
}