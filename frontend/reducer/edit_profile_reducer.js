import { EDIT_PROFILE_PIC } from '../actions/modal_actions';

const editProfileReducer = (state, action) => {
  switch(action.type) {
    case EDIT_PROFILE_PIC:
      return action.user;
    default:
      return null;
  };
};

export default editProfileReducer;
