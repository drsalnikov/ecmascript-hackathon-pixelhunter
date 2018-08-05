import { combineReducers } from 'redux';
import gameReducer from './game';
import questionsReducer from './questions';
import answersReducer from './answers';
import statsReducer from './stats';


export default combineReducers({
  game: gameReducer,
  questions: questionsReducer,
  answers: answersReducer,
  stats: statsReducer
});
