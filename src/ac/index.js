import {
  ADD_USERNAME, LOAD_QUESTIONS, START, SUCCESS, FAIL, ADD_ANSWER,
  TICK, RESET_TIMER, MISTAKE, NEXT_LEVEL, POST_RESULT,
  RESET_GAME, RESET_ANSWERS, RESET_QUESTIONS, RESET_STATS
} from '../const';


export function addUsername(username) {
  return {
    type: ADD_USERNAME,
    payload: { username }
  }
};

export function tick() {
  return {
    type: TICK
  }
};

export function nextLevel() {
  return {
    type: NEXT_LEVEL
  }
};

export function resetTimer() {
  return {
    type: RESET_TIMER
  }
};

export function mistake() {
  return {
    type: MISTAKE
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
    }, 1500);
  };
};

export function postResults() {
  return (dispatch, getState) => {
    dispatch({
      type: POST_RESULT + START
    });

    const { answers, game: { username } } = getState();
    console.log(answers);

    const data = {
      username: username,
      answers: [...answers]
    };

    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    fetch(`https://es.dump.academy/pixel-hunter/stats/travolta-${username}`, requestSettings)
      .then(response => {
        if (response.ok) {
          dispatch({
            type: POST_RESULT + SUCCESS
          });
        }
      })
      .catch(error => {
        dispatch({
          type: POST_RESULT + FAIL,
          payload: { error }
        })
      });
  };
};

export function restartGame() {
  return (dispatch) => {
    dispatch({
      type: RESET_GAME
    });
    dispatch({
      type: RESET_ANSWERS
    });
    dispatch({
      type: RESET_QUESTIONS
    });
    dispatch({
      type: RESET_STATS
    });
  };
};
