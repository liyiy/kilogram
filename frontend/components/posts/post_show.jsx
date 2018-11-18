import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';

const msp = (state, ownProps) => {

  const post = Object.values(state.entities.posts);
  return {
    post
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
  };
};

const PostShow = () => {
  return(
    <div className="post-show">
      is this working
    </div>
  );
};

export default withRouter(connect(msp, mdp)(PostShow));
