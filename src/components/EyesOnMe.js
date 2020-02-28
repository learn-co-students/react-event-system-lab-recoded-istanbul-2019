import React from 'react';

export default class EyesOnMe extends React.Component {
  focusHandler = (event) => {console.log('Good!');};
  blurHandler = (event) => {console.log('Hey! Eyes on me!');};
  render() {
    return <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Press</button>;
  }
}