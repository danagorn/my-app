export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const RESET = 'RESET';
export const SELECT_QUESTION = 'SELECT_QUESTION';

export function questionAnswer(index, answer) {
  return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function changeQuestion(index, act, length) {
  return { type: CHANGE_QUESTION, payload: { index, act, length } };
}

export function submit(questions) {
  return { type: SUBMIT, payload: { questions } };
}

export function initQuestions(questions) {
  return { type: INIT_QUESTIONS, payload: { questions } };
}

export function reset() {
  return { type: RESET };
}

export function selectQuestion(target) {
  return { type: SELECT_QUESTION, payload: { target } };
}
