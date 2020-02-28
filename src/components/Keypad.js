import React from 'react';

export default class Keypad extends React.Component {
  keyUpHandler = (event) => {console.log('Entering password...')}
  render() {
    return <input type="password" onKeyUp={this.keyUpHandler} />
  }
}