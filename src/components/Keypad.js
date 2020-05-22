import React, {Component} from 'react'

class Keypad extends Component {
  keyListener = () => {
    return console.log('Entering password...')
  }
  render() {
    return (
      <input type="password" onKeyUp={this.keyListener}/>
    )
  }
}

export default Keypad;
