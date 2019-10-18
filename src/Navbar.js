import React from 'react';
import './css/prueba.css';
import Navibar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


export default class Navbar extends React.Component {

  render() {
    return (
      // <div>
      //   <button onClick={this.props.resetSameQuestions}>Reintentar mismo juego</button>
      //   <button onClick={this.props.resetNewQuestions}>Nuevo juego</button>
      // </div>

      <Navibar bg="primary" variant="dark" fluid="true">
    <Navibar.Brand href="/">Quiz</Navibar.Brand>
    <Nav className="mr-auto">
    <ButtonToolbar>
      <Button variant="primary" onClick={this.props.resetSameQuestions}>Reintentar</Button>
      <Button variant="primary" onClick={this.props.resetNewQuestions}>Nuevo Juego</Button>
      </ButtonToolbar>
    </Nav>
  </Navibar>

    );
  }
}
