import React from 'react';

export default class Keypad extends React.Component {
    listenPassword = () => console.log('Entering password...');
    render() {
        return (
            <input type="password" name="pass" onKeyUp={this.listenPassword}></input>
        )
    }
}