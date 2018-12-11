import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};



export const fetchUsers = (data) => dispatch => {
  return (
    UsersApiUtil.fetchUsers(data).then(res => dispatch(receiveUsers(res)))
  );
};

export const fetchUser = (user) => dispatch => {
  return (
    UsersApiUtil.fetchUser(user).then(res => dispatch(receiveUser(res)))
  );
};

export const fetchSearch = (user) => dispatch => {
  return (
    UsersApiUtil.fetchSearch(user).then(res => dispatch(receiveUsers(res)))
  );
};
