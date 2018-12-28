// import { merge } from 'lodash;
import { OPEN_POST } from '../actions/modal_actions';
// import { RECEIVE_COMMENT } from '../actions/comment_actions';

const openPostReducer = (state, action) => {
  switch(action.type) {
    case OPEN_POST:
      return {post: action.post, currUser: action.currUser, comments: action.postComments};
    default:
      return null;
  };
};

export default openPostReducer;
