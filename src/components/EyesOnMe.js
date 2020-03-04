// Code EyesOnMe Component Here
import React,{Component} from 'react'
class EyesOnMe extends Component{
    constructor(){
        super()
    }
    focushandler=()=>{console.log(`Good!`)}
    blurHandler=()=>{console.log(`Hey! Eyes on me!`)}
    render(){
        return(<button onFocus={this.focushandler} onBlur ={this.blurHandler}> btm </button>)
           
        
    }
}
export default EyesOnMe