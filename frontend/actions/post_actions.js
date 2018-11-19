import * as PostApiUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const fetchPosts = () => dispatch => {
  return (
    PostApiUtil.fetchPosts().then(res => dispatch(receivePosts(res)))
  );
};

export const fetchPost = id => dispatch => {
  return (
    PostApiUtil.fetchPost(id).then(res => dispatch(receivePost(res)))
  );
};

export const createPost = post => dispatch => {
  return (
    PostApiUtil.createPost(post).then(res => dispatch(receivePost(res)))
  );
};

export const updatePost = post => dispatch => {
  return (
    PostApiUtil.updatePost(post).then(res => dispatch(receivePost(post)))
  );
};

export const deletePost = postId => dispatch => {
  return (
    PostApiUtil.deletePost(postId).then(res => dispatch(removePost(postId)))
  );
};
