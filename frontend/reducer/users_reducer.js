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

      newState[action.follow.follow.follower_id].allFollowings.push(action.userId);
      newState[action.follow.follow.followee_id].allFollowers.push(action.currUserId);
      newState[action.follow.follow.follower_id].numFollowings++;
      newState[action.follow.follow.followee_id].numFollowers++;
      return newState;
    case UNFOLLOW_USER:
      let anothernewState = merge({}, state);

      let currUserArr = anothernewState[action.currUserId].allFollowings;
      let userArr = anothernewState[action.userId].allFollowers;

      let index = currUserArr.indexOf(action.userId);
      let index2 = userArr.indexOf(action.currUserId)
      delete currUserArr[index];
      delete userArr[index2];
      anothernewState[action.currUserId].numFollowings--;
      anothernewState[action.userId].numFollowers--;
      
      return anothernewState;
    default:
      return state;
  }
};

export default usersReducer;
