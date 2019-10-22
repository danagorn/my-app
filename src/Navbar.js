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

      <Navibar bg="primary" variant="dark" fluid="true">
      <span style={{textFont:40, marginRight:20, fontWeight:'bold', color: 'white'}}>Quiz</span>      
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
