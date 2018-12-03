import * as LikeApiUtil from '../util/likes_api_util';

export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE'

export const receiveLike = ({like}, currUser ) => {
  return {
    type: RECEIVE_LIKE,
    like, currUser
  };
};



export const removeLike = ({like}, likeableId, currUser) => {
  return {
    type: REMOVE_LIKE,
    like, likeableId, currUser
  };
};


export const createLike = (like, user) => dispatch => {
  return (
    LikeApiUtil.createLike(like, user).then(res => dispatch(receiveLike(res, user)))
  );
};

export const deleteLike = (like, likeableId, user) => dispatch => {

  return (
    LikeApiUtil.deleteLike(like, likeableId, user).then(res => dispatch(removeLike(like, likeableId, user)))
  );
};
