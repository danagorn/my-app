import React from 'react';
import Numbers from "./Numbers";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './css/prueba.css';

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
      <div class="text-center">
      <div className="buttons">
<ButtonToolbar className="justify-content-around">
      <Button variant="outline-primary" disabled={this.disableMin()} onClick={this.previusChange}>Anterior</Button>
      <Button variant="primary" onClick={this.submit}>Submit</Button>
      <Button variant="outline-primary" disabled={this.disableMax()} onClick={this.nextChange}>Siguiente</Button>
</ButtonToolbar>
<p></p>
</div>

      <Numbers questions={this.props.questions}
      currentQuestion={this.props.currentQuestion}
      selectNewQuestion={this.props.selectNewQuestion}/>
      </div>

    );
  }
}
