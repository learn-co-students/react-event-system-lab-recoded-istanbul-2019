import React from 'react';

export default class EyesOnMe extends Component {

    focus = () => {
        console.log('Good!');
    }

    blur = () => {
        console.log('Hey! Eyes on me!');
    }

    render() {
      return (
        <button focus={this.focus} blur={this.blur}>Tickle me!</button>
      )
    }
  
}