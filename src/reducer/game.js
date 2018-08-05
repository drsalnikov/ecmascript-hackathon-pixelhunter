import { ADD_USERNAME, TICK, MISTAKE, RESET_TIMER, NEXT_LEVEL, RESET_GAME } from '../const';
import { Limit } from '../conf';

const defaultState = {
  username: '',
  time: Limit.TIME,
  lives: Limit.LIVES,
  level: 0
}

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {

    case ADD_USERNAME:
      return { ...state, username: payload.username };
    case TICK:
      return { ...state, time: state.time - 1 };
    case MISTAKE:
      return { ...state, lives: state.lives - 1 };
    case NEXT_LEVEL:
      return { ...state, level: state.level + 1 };
    case RESET_TIMER:
      return { ...state, time: Limit.TIME };
    case RESET_GAME:
      return { ...defaultState };

  }

  return state;
}
