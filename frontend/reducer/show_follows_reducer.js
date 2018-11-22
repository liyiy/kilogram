import { SHOW_FOLLOWERS, SHOW_FOLLOWINGS } from '../actions/modal_actions';

const showFollowsReducer = (state, action) => {
  switch(action.type) {
    case SHOW_FOLLOWERS:
      return action.followers;
    case SHOW_FOLLOWINGS:
      return action.followings;
    default:
      return null;
  };
};

export default showFollowsReducer;
