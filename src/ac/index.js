import { ADD_USERNAME, LOAD_QUESTIONS, START, SUCCESS, FAIL, ADD_ANSWER } from '../const';

export function addUsername(username = '') {
  return {
    type: ADD_USERNAME,
    payload: { username }
  }
};

export function addAnswer(answer = {}) {
  return {
    type: ADD_ANSWER,
    payload: answer
  }
};

export function loadQuestions() {
  return (dispatch) => {
    dispatch({
      type: LOAD_QUESTIONS + START
    });
    setTimeout(() => {
      fetch(`https://es.dump.academy/pixel-hunter/questions`)
        .then(res => {
          if (res.status >= 400) {
            throw new Error(res.statusText)
          }
          return res.json()
        })
        .then(response => dispatch({
          type: LOAD_QUESTIONS + SUCCESS,
          payload: { response }
        }))
        .catch(error => {
          dispatch({
            type: LOAD_QUESTIONS + FAIL,
            payload: { error }
          })
        });
    }, 500);
  };
};
