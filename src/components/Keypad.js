// Code Keypad Component Here
import React from 'react'

class  Keypad extends React.Component {
    test (){
        console.log('Entering password...')
    }
    render(){
     
    return <input type ="password" onKeyUp={this.test} ></input>    }
}
export default Keypad;