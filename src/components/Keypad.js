// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

  passwordEnterEvent = () => {
    console.log('Entering password...')
}
 
  render() {
    return (
      <div>
        <input type='password' onKeyUp={this.passwordEnterEvent}></input>
      </div>
    )
  }
}

export default Keypad
