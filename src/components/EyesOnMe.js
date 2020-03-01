// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnMe extends Component {

       focusHanlde = () => console.log('Good!')
       blurHandle = () => console.log('Hey! Eyes on me!')
  
    render() {
        return (
            <div>
            <button onFocus={this.focusHanlde} onBlur={this.blurHandle}> Hi </button>
            </div>
        )
    }
}
