import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};


export const fetchUsers = () => dispatch => {
  return (
    UsersApiUtil.fetchUsers().then(res => dispatch(receiveUsers(res)))
  );
};
