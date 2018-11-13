import { merge } from "lodash";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = { id: null };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
    default:
      return state;
  }
};

export default sessionReducer;
