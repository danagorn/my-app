import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar";
import Sideboard from "./Sideboard";

export default class Game extends React.Component {

  render() {
    return (
      <div className="container">
      <Content question={this.props.question}
      boardClick={this.boardClick}
      inputChange={this.props.inputChange}
      currentQuestion={this.props.currentQuestion}
      questions={this.props.questions}
      />
      <div className="action-bar">
      <Actionbar change={this.props.change}
      submit={this.props.submit}
      currentQuestion={this.props.currentQuestion}
      questions={this.props.questions}
      selectNewQuestion={this.props.selectNewQuestion}
      />
      </div>
      <Sideboard question={this.props.question}/>

      </div>
    );
  }
}
