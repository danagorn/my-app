import React from 'react';
import { Link } from 'react-router';
import './css/prueba.css';
import Button from 'react-bootstrap/Button';
export default class Home extends React.Component {

  render() {
    return (
      <div className="center">
      <p></p>
        <h1>Bienvenido al Quiz de Álvaro y Dani</h1>
        <p></p>
      <Button size="lg" href="/play">PLAY</Button>
      <p></p>
      </div>
    );
  }
}
