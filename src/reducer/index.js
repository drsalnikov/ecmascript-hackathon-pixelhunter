import { combineReducers } from 'redux';
import usernameReducer from './username';
import questionsReducer from './questions';
import answersReducer from './answers';
import statsReducer from './stats';


export default combineReducers({
  username: usernameReducer,
  questions: questionsReducer,
  answers: answersReducer,
  stats: statsReducer
})
