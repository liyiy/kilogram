import { OPEN_POST } from '../actions/modal_actions';

const openPostReducer = (state, action) => {
  switch(action.type) {
    case OPEN_POST:
      return action.post;
    default:
      return null;
  };
};

export default openPostReducer;
