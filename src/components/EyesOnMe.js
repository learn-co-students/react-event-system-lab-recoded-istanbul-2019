import React, { Component } from 'react';
export default class EyesOnMe extends Component{
    event1=()=>{
        console.log('Good!')
    }
    event2=()=>{
        console.log('Hey! Eyes on me!')
    }
    render(){
        return (
        <button onFocus={this.event1} onBlur={this.event2}></button>
        );
            }
}