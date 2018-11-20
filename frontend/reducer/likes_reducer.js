import { merge } from 'lodash';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]: action.like});
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[action.likeId];
      return newState;
    default:
      return state;
  };
};

export default likesReducer;
