import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default class Success extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data, // contenido del parent component
      counter: 0, // valor que irá incrementando
      intervalId: 0, // identificativo del intervalo
      timer: 60 // 1 minuto que ira decreciendo
    };
  }

  // Cuando el component se montó en el DOM
  componentDidMount() {
    // asignar intervalo a variable para poder manipular más tarde
    const intervalId = setInterval( this.setTimer.bind( this ), 1000 ); // 1000 milisegundos === 1 segundo
    // asignar variable a this.state
    this.setState({ intervalId });
  }

  // Cuando el component de desmonta del DOM
  componentWillUnmount() {
    // evitar que el intervalo corra indefinidamente
    clearInterval( this.state.intervalId );
  }

  // método que será llamado cada x segundos
  setTimer() {
    this.setState({
      counter: this.state.counter + 1.6666667, // 1.66667 para que 'value' y timer casen un poco
      timer: this.state.timer - 1 // decrementar el tiempo por un segundo
    });
    // re-dirigir cuando los segundos se acaben
    if ( this.state.timer < 0 ) {
      // not best solution
      window.location = '/';
    }
  }

  // si shouldComponentUpdate === true, el component ejecuta render() y actualiza el state
  shouldComponentUpdate( nextProps, nextState ) {
    return nextState.counter > this.state.counter;
  }

  render() {
     //this.state.content.message === <h1>su mensaje ha sido enviado....</h1>
    // this.state.content.progress === Será re-dirigido después de `${timer}`
    const { message, progress } = this.state.content;
    const { timer, counter } = this.state;
    if( !message ) {
      return (
        <div>
          <div className="loading">
            <h1>Cargando ...</h1>
          </div>
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          { ReactHtmlParser( message )}
          // añadimos 0 a timer cuando es menor que 10
          { ReactHtmlParser( message )}
          {progress} 0:{timer < 10 ? `0${timer}` : timer}
          // uso bootstrap pero sino sería:
          // <progress value={counter}> {`${Math.round( counter )}%`} </progress>
          // Math.round( counter ) así el valor de counter es más claro y limpio
          <Progress color="warning" value={counter}> {`${Math.round( counter )}%`} </Progress>
        </Col>
      </Row>
    );
  }
}
