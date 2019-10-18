import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar";
import Sideboard from "./Sideboard";

export default class Game extends React.Component {

  render() {
    return (
      <div>
      <Content question={this.props.question}
      boardClick={this.boardClick}
      inputChange={this.props.inputChange}
      currentQuestion={this.props.currentQuestion}
      questions={this.props.questions}
      />

      <Actionbar change={this.props.change}
      submit={this.props.submit}
      currentQuestion={this.props.currentQuestion}
      questions={this.props.questions}
      selectNewQuestion={this.props.selectNewQuestion}
      />
      <Sideboard question={this.props.question}/>
      </div>
    );
  }
}
