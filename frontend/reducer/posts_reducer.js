import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from "lodash";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.post.id]: action.post.post});
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    case RECEIVE_LIKE:
      newState[action.like.likeable_id].numLikes++;
      newState[action.like.likeable_id].userLikes.push(action.currUser);
      return newState;
    case REMOVE_LIKE:
      newState[action.likeableId].numLikes--;
      let arr = newState[action.likeableId].userLikes;
      newState[action.likeableId].userLikes = arr.filter(likerId => likerId != action.currUser);
      return newState;
    default:
      return state;
  };
};

export default postsReducer;
