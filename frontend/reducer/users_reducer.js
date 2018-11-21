import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/follow_actions';

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user })
    case RECEIVE_USERS:
      return merge({}, state, action.users)
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case FOLLOW_USER:
      let newState = merge({}, state);
      newState[action.follow.follower_id].allFollowings.push(action.userId);
      return newState;
    case UNFOLLOW_USER:
      let anothernewState = merge({}, state);
      let arr = anothernewState[action.follow.follower_id].allFollowings;
      let index = arr.indexOf(action.userId);
      delete arr[index];
      return anothernewState;
    default:
      return state;
  }
};

export default usersReducer;
