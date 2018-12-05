// import merge from 'lodash/merge';
import { RECEIVE_SEARCH } from '../actions/filter_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      return action.users.users;
    default:
      return state;
  };
};

export default searchReducer;
