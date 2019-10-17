import React from 'react';
import Numbers from "./Numbers";

export default class Actionbar extends React.Component {

  previusChange = () => {
    this.props.change(0);
  }

  nextChange = () => {
    this.props.change(1);
  }

  submit = () => {
    this.props.submit();
  }

  disableMax = () => {
    return this.props.currentQuestion === this.props.questions.length -1 ? true : false;
  }

  disableMin = () => {
    return this.props.currentQuestion === 0 ? true : false;
  }

  render() {
    return (
      <div>
      <button disabled={this.disableMin()} onClick={this.previusChange}>Anterior</button>
      <button disabled={this.disableMax()} onClick={this.nextChange}>Siguiente</button>
      <button onClick={this.submit}>Submit</button>
      <Numbers questions={this.props.questions}
      currentQuestion={this.props.currentQuestion}
      selectNewQuestion={this.props.selectNewQuestion}/>
      </div>

    );
  }
}
