// Code Keypad Component Here
import React,{Component} from 'react'
class Keypad extends Component {
    constructor(){
        super()
    }
    keyhandle =() =>{console.log(`Entering password...`)}
    
    render(){
        return (<div><input onKeyUp = {this.keyhandle} type="password" /> </div>)
    }
}
export default Keypad 