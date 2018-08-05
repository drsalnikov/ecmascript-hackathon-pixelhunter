import { LOAD_QUESTIONS, START, SUCCESS, RESET_QUESTIONS } from '../const';

const defaultState = {
  loadingQuestions: false,
  loadedQuestions: false,
  questions: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_QUESTIONS + START:
      return { ...state, loadingQuestions: true, data: null };
    case LOAD_QUESTIONS + SUCCESS:
      return { ...state, loadedQuestions: true, data: payload.response };
    case RESET_QUESTIONS:
      return { ...defaultState }
  };
  return state;
}
