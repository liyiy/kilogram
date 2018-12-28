import * as CommentApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

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

export const fetchComments = () => dispatch => {
  return (
    CommentApiUtil.fetchComments().then(res => dispatch(receiveComments(res)))
  );
};

export const fetchComment = id => dispatch => {
  return (
    CommentApiUtil.fetchComment(id).then(res => dispatch(receiveComment(res)))
  );
};

export const createComment = comment => dispatch => {
  return (
    CommentApiUtil.createComment(comment).then(res => dispatch(receiveComment(res)))
  );
};

export const updateComment = comment => dispatch => {
  return (
    CommentApiUtil.updateComment(comment).then(res => dispatch(receiveComment(comment)))
  );
};

export const deleteComment = commentId => dispatch => {
  return (
    CommentApiUtil.deleteComment(commentId).then(res => dispatch(removeComment(commentId)))
  );
};
