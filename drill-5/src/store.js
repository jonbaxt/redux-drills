import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/star_wars';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promiseMiddleware()));