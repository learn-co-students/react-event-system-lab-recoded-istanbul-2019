// Code EyesOnMe Component Here
import React, { Component } from 'react';
export default class EyesOnMe extends Component {


    onFocusHandeler = () => {
        console.log('Good!')
    }

    onBlurHandeler = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.onFocusHandeler} onBlur={this.onBlurHandeler}></button>
        )
    }
}
