import * as LikeApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE'

export const receiveLike = ({like}, currUser ) => {
  return {
    type: RECEIVE_LIKE,
    like, currUser
  };
};

export const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
};

export const removeLike = (likeId, currUser) => {
  return {
    type: REMOVE_LIKE,
    likeId, currUser
  };
};

export const fetchLikes = () => dispatch => {
  return (
    LikeApiUtil.fetchLikes().then(res => dispatch(receiveLikes(res)))
  );
};

export const createLike = (like, user) => dispatch => {
  return (
    LikeApiUtil.createLike(like, user).then(res => dispatch(receiveLike(res, user)))
  );
};

export const deleteLike = (likeId, user) => dispatch => {
  return (
    LikeApiUtil.deleteLike(likeId, user).then(res => dispatch(removeLike(likeId, user)))
  );
};
