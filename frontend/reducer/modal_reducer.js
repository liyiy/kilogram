import { OPEN_MODAL, CLOSE_MODAL, OPEN_POST, SHOW_FOLLOWERS, SHOW_FOLLOWINGS } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case OPEN_POST:
      return action.modal;
    case SHOW_FOLLOWERS:
    case SHOW_FOLLOWINGS:
      return action.modal;
    default:
      return state;
  };
};
