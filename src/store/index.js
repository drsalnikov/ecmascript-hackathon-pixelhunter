import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
// import logger from '../mw/logger';

const store = createStore(reducer, {}, applyMiddleware(thunk));

window.store = store;

export default store;
