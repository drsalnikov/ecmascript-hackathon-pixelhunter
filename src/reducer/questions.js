import { LOAD_QUESTIONS, START, SUCCESS } from '../const';

const defaultState = {
  loadingQuestions: false,
  loadedQuestions: false,
  questions: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_QUESTIONS + START:
      return Object.assign({}, state, {
        loadingQuestions: true,
        data: null
      });

    case LOAD_QUESTIONS + SUCCESS:
      return Object.assign({}, state, {
        loadedQuestions: true,
        data: payload.response
      });
  };
  return state;
}
