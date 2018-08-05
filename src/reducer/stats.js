import { POST_RESULT, START, SUCCESS, RESET_STATS } from '../const';

const defaultState = {
  posting: false,
  posted: false
};

export default (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case POST_RESULT + START:
      return { ...state, posting: true }
    case POST_RESULT + SUCCESS:
      return { ...state, posted: true }
    case RESET_STATS:
      return { ...defaultState }
  };
  return state;
}
