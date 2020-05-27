import React, { Component } from 'react';

export default class Keypad extends Component {

    listen = () => {
        console.log('Entering password...');
    }

    render() {
      return (
        <input type="password" onKeyUp={this.listen} />
      )
    }
  
}
