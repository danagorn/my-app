import React from 'react';

export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.resetSameQuestions}>Reintentar mismo juego</button>
        <button onClick={this.props.resetNewQuestions}>Nuevo juego</button>
      </div>
    );
  }
}
