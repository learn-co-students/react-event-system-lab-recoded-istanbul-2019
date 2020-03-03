// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

  blurEvent = ()=>{
    console.log('Good!')
  }

  focusEvent = ()=>{
    console.log('Hey! Eyes on me!')
  }



  render() {
    return (
      <div>
        <button onBlur={this.focusEvent} onFocus={this.blurEvent}></button>
      </div>
    )
  }
}

export default EyesOnMe

