import * as FollowApiUtil from '../util/follows_api_util';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';


export const followUser = (follow, userId) => {
  return {
    type: FOLLOW_USER,
    userId
  };
};

export const unfollowUser = (id, userId) => {
  return {
    type: UNFOLLOW_USER,
    userId
  };
};

export const createFollow = (follow, user) => dispatch => {
  return (
  FollowApiUtil.createFollow(follow).then(res => dispatch(followUser(user)))
  );
};

export const deleteFollow = (id, userId) => dispatch => {
  return (
    FollowApiUtil.deleteFollow(id, userId).then(res => dispatch(unfollowUser(id, userId)))
  );
};
