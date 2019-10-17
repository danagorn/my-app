import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS, RESET, SELECT_QUESTION } from './actions'

function score(state = 0, action = {}) {
  switch(action.type) {
    case SUBMIT:
    state = 0;
    action.payload.questions.map((elemento,i)=>{
      if(elemento.answer === elemento.userAnswer){
        return state++;
      }
    })
    console.log(score);
    default:
    return state;
  }
}
function finished(state = false, action = {}) {
  switch(action.type) {
    case SUBMIT:
    return state ? false : true;
    default:
    return state;
  }
}
function currentQuestion(state = 0, action = {}) {
  switch(action.type) {
    case CHANGE_QUESTION:
    if (action.payload.act === 0)
    if(action.payload.index === 0){
      return state;
    }else{
      return state - 1;
    }
    else {
      if(action.payload.index === action.payload.length){
        return state;
      }else{
        return state +1;
      }
    }
    case SUBMIT:
      return 0;
    case RESET:
      return 0;
    case SELECT_QUESTION:
      return action.payload.target;
    default:
    return state;
  }
}
function questions(state = [], action = {}) {
  switch(action.type) {
    case QUESTION_ANSWER:
    return state.map((question,i) => {
      return { ...question,
        userAnswer: action.payload.index === i ?
        action.payload.answer : question.userAnswer}
      })
      case SUBMIT:
        return state.map((question,i) => {
          return { ...question,
            userAnswer: '' }
          })
      case RESET:
        return state.map((question,i) => {
          return { ...question,
            userAnswer: '' }
          })
      case INIT_QUESTIONS:
        return action.payload.questions;
      default:
        return state;
      }
    }

    const GlobalState = (combineReducers({
      score: score,
      finished: finished,
      currentQuestion: currentQuestion,
      questions: questions
    }));
    export default GlobalState;
