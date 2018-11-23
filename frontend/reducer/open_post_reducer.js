import { OPEN_POST } from '../actions/modal_actions';

const openPostReducer = (state, action) => {
  switch(action.type) {
    case OPEN_POST:
      return {post: action.post, currUser: action.currUser};
    default:
      return null;
  };
};

export default openPostReducer;
