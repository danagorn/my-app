import React from 'react';

export default class Answer extends React.Component {

  render() {
    return (
      <div>
      <input type="text"
      value={this.props.question.userAnswer || ''}
      onChange={(e)=>this.props.inputChange(e.target.value)}>
      </input>
      </div>
    );
  }
}
