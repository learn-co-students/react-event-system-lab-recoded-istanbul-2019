import React, { Component } from 'react'

export class EyesOnMe extends Component {
    focusOn() {
        console.log('Good!');
    }

    focusOff() {
        console.log('Hey! Eyes on me!');
    }

    render() {

        return (
            <div>
                <button onFocus={this.focusOn}
                    onBlur={this.focusOff}>EyesOnMe</button>
            </div>
        )
    }
}

export default EyesOnMe
