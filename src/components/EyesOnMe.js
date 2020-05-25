// Code EyesOnMe Component Here
import React from 'react'

export class EyesOnMe extends React.Component {

    focusNow(){
        console.log('Good!');
    }
    blurNow(){
        console.log('Hey! Eyes on me!');
    }
    render (){
        return <button onFocus={this.focusNow} onBlur={this.blurNow}></button>
    }

}

export default EyesOnMe;
