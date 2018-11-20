import * as LikeApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE'

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const receiveLikes = likes => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
};

export const removeLike = (likeId) => {
  return {
    type: REMOVE_LIKE,
    likeId
  };
};

export const fetchLikes = () => dispatch => {
  return (
    LikeApiUtil.fetchLikes().then(res => dispatch(receiveLikes(res)))
  );
};

export const createLike = like => dispatch => {
  return (
    LikeApiUtil.createLike(like).then(res => dispatch(receiveLike(res)))
  );
};

export const deleteLike = likeId => dispatch => {
  return (
    LikeApiUtil.deleteLike(likeId).then(res => dispatch(removeLike(likeId)))
  );
};
