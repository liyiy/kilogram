import * as CommentApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const fetchComment = id => dispatch => {
  return (
    CommentApiUtil.fetchComment(id).then(res => dispatch(receiveComment(res)))
  );
};

export const createComment = Comment => dispatch => {
  return (
    CommentApiUtil.createComment(Comment).then(res => dispatch(receiveComment(Comment)))
  );
};

export const updateComment = Comment => dispatch => {
  return (
    CommentApiUtil.updateComment(Comment).then(res => dispatch(receiveComment(Comment)))
  );
};

export const deleteComment = CommentId => dispatch => {
  return (
    CommentApiUtil.deleteComment(CommentId).then(res => dispatch(removeComment(CommentId)))
  );
};
