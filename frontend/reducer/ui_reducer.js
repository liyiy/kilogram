import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';
import openPostReducer from './open_post_reducer';

export default combineReducers({
  modal,
  post: openPostReducer
});
