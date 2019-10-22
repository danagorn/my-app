import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import { questions } from "../assets/mock-data";
import { Router, Route, browserHistory } from 'react-router';
import Home from '../Home';
import App from '../App';
import Navbar from '../Navbar';


export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [ ...questions ]
    }
    this.store = this.configureStore();

  }

  render() {
    return (
      <Provider store={ this.store }>
        <App store={ this.store }/>
      </Provider>
    );
  }
  configureStore() {
    return createStore(GlobalState, this.initialState);
  }
}
