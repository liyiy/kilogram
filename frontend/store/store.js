import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk))
};

export default configureStore;
