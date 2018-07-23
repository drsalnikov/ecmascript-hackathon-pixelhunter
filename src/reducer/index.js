import { combineReducers } from 'redux';
import usernameReducer from './username';


export default combineReducers({
  username: usernameReducer
})
