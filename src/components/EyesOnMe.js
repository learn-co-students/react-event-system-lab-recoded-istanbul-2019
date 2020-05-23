// Code EyesOnMe Component Here
import React,{Component} from 'react';
export default class EyesOnMe extends Component{
    eyesOnMe=()=>{console.log('Hey! Eyes on me!')}
    render(){
        return(
            <button onFocus={()=>{console.log('Good!')}} onBlur={this.eyesOnMe}>Hello World</button>
        );
    }

} 