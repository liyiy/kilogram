import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from "lodash";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    case RECEIVE_LIKE:
      let anothernewState = merge({}, state);
      anothernewState[action.like.likeable_id].numLikes++;
      anothernewState[action.like.likeable_id].userLikes.push(action.currUser);
      return anothernewState;
    case REMOVE_LIKE:
      let anotherrnewState = merge({}, state);

      anotherrnewState[action.likeableId].numLikes--;

      let arr = anotherrnewState[action.likeableId].userLikes;
      anotherrnewState[action.likeableId].userLikes = arr.filter(likerId => likerId != action.currUser);
      return anotherrnewState;
    default:
      return state;
  };
};

export default postsReducer;
