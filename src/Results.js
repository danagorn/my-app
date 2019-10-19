import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default class Game extends React.Component {

  render() {
    return (
      <div className="center-score">
      <h3>Resultado...</h3>
      <h2>¡{this.props.score} aciertos!</h2>
      <p></p>
      <ProgressBar animated now={this.props.score*10} />
      <p></p>
      <ButtonToolbar className="justify-content-around">
      <Button margin="10px" size="lg" onClick={this.props.submit}>Reintentar</Button>
      <Button margin="10px" size="lg" onClick={this.props.loadNewData}>Nuevo juego</Button>
      </ButtonToolbar>

      </div>
    );
  }
}
