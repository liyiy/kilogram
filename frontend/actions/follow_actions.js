import * as FollowApiUtil from '../util/follows_api_util';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';


export const followUser = (follow, userId) => {
  return {
    type: FOLLOW_USER,
    follow, userId
  };
};

export const unfollowUser = (currUserId, userId) => {
  return {
    type: UNFOLLOW_USER,
    currUserId, userId
  };
};

export const createFollow = (follow, userId) => dispatch => {

  return (
  FollowApiUtil.createFollow(follow, userId).then(res => dispatch(followUser(res, userId)))
  );
};

export const deleteFollow = (currUserId, userId) => dispatch => {
  return (
    FollowApiUtil.deleteFollow(currUserId, userId).then(res => dispatch(unfollowUser(currUserId, userId)))
  );
};
