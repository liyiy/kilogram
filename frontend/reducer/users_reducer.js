import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/follow_actions';
import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';


const usersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user })
    case RECEIVE_USERS:
      return merge({}, state, action.users)
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case FOLLOW_USER:
      newState[action.follow.follower_id].allFollowings.push(action.follow.followee_id);
      newState[action.follow.followee_id].allFollowers.push(action.follow.follower_id);
      newState[action.follow.follower_id].numFollowings++;
      newState[action.follow.followee_id].numFollowers++;
      return newState;
    case UNFOLLOW_USER:
      let currUserArr = newState[action.currUserId].allFollowings;
      let userArr = newState[action.userId].allFollowers;
      let currUser = action.currUserId;
      let user = action.userId;
      newState[action.currUserId].allFollowings = currUserArr.filter(id => id != user)
      newState[action.userId].allFollowers = userArr.filter(id => id != currUser)
      newState[action.currUserId].numFollowings--;
      newState[action.userId].numFollowers--;
      return newState;
    case RECEIVE_POST:
      newState[action.post.post.poster_id].numPosts++;
      return newState;
    case REMOVE_POST:
      newState[action.post.poster_id].numPosts--;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
