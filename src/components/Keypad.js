// Code Keypad Component Here
import React, { Component } from 'react';

export class Keypad extends React.Component {

    typingPassword = () => {
        console.log('Entering password...');
    }

    render() {
        return (
            <input type="password" onKeyUp = {this.typingPassword}/>
        )
    }
}


export default Keypad