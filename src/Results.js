import React from 'react';

export default class Game extends React.Component {

  render() {
    return (
      <div>
      <h2>Resultados</h2>
      <h3>{this.props.score}</h3>
      <button onClick={this.props.submit}>Reintentar mismo juego</button>
      <button onClick={this.props.loadNewData}>Nuevo juego</button>
      </div>
    );
  }
}
