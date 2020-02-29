// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends Component{
    render(){
        return (<button onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}>Look</button>)
    }
    onFocusHandler = () => {
        console.log('Good!')
      }
      onBlurHandler = () => {
        console.log('Hey! Eyes on me!')
      }
}
