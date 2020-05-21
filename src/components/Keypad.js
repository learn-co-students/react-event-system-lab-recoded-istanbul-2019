import React, { Component } from 'react'

export class Keypad extends Component {
    enterPassword() {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.enterPassword}></input>
            </div>
        )
    }
}
export default Keypad