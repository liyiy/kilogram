import * as PostApiUtil from './util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = payload => {
  return {
    type: RECEIVE_POSTS,
    payload
  };
};

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const removePost = id => {
  return {
    type: REMOVE_POST,
    id
  };
};

export const fetchPosts = () => dispatch => {
  return (
    PostApiUtil.fetchPosts(data).then(res => dispatch(receivePosts(res)))
  )
}
