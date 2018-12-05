import { combineReducers } from 'redux';

import filters from './filters_reducer';
import modal from './modal_reducer';
import openPostReducer from './open_post_reducer';
import editProfileReducer from './edit_profile_reducer';
import showFollowsReducer from './show_follows_reducer';

export default combineReducers({
  modal,
  post: openPostReducer,
  follows: showFollowsReducer,
  user: editProfileReducer,
  filters: filters
});
