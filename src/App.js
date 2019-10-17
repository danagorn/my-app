import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeQuestion, questionAnswer, submit, initQuestions, reset, selectQuestion } from './redux/actions'
import Game from "./Game";
import Results from "./Results";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor(props){
    super();
  }

componentDidMount() {
  this.fetching();

}

fetching = () =>{
fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=25c18cae239a329347de')
.then((data) => data.json())
.then((questions) => this.props.dispatch(initQuestions(questions)))
.catch((error) => console.log(error))
}

changeApply = (act) => {
  this.props.dispatch(changeQuestion(this.props.currentQuestion, act, this.props.questions.length -1));
}

inputChange = (answer) => {
  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
}

submitChange = () => {
  this.props.dispatch(submit(this.props.questions));
}

loadNewData = () =>{
  this.fetching();
  this.props.dispatch(submit(this.props.questions));
}

resetSameQuestions = () =>{
  this.props.dispatch(reset(this.props.questions));
}

resetNewQuestions = () =>{
  this.fetching();
  this.props.dispatch(reset(this.props.questions));
}

selectNewQuestion = (target) =>{
  this.props.dispatch(selectQuestion(target));
}


render() {

  if (this.props.questions.length != 0){

    if(!this.props.finished){
      return (
        <div className="App">
        <Navbar score={this.props.score} resetSameQuestions={this.resetSameQuestions} resetNewQuestions={this.resetNewQuestions}/>
        <Game question={this.props.questions[this.props.currentQuestion]}
        change={this.changeApply}
        inputChange={this.inputChange}
        submit={this.submitChange}
        currentQuestion={this.props.currentQuestion}
        questions={this.props.questions}
        selectNewQuestion={this.selectNewQuestion}
        />
        </div>
      )
    } else {
      return (
        <div className="App">
        <Results score={this.props.score} submit={this.submitChange} loadNewData={this.loadNewData}/>
        </div>)
      }

    } else {
      return (
        <span>No hay preguntas disponibles en este momento</span>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(App);
