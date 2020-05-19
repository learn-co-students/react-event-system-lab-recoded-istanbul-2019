// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

    writingPassword(){
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyUp = {this.writingPassword} type="password" />
            </div>
        )
    }
}

export default Keypad
