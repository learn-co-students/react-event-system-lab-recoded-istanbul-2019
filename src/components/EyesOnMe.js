import React from 'react';

export default class EyesOnMe extends React.Component {
    constructor(props) {
        super(props);
    }
    blurIT = () => console.log('Hey! Eyes on me!');
    focusIT = () => console.log('Good!');
    render() {
        return (
            <button onBlur={this.blurIT} onFocus={this.focusIT}></button>
        )
    }
}