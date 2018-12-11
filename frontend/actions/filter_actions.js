import { fetchSearch } from './user_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = (users) => {
  return {
    type: RECEIVE_SEARCH,
    users
  };
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {

  dispatch(changeFilter(filter, value));

  return dispatch(fetchSearch(getState().ui.filters.users)).then(res => dispatch(receiveSearch(res)));
};
