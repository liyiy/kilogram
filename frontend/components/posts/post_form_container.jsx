import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostForm from './post_form';

const mdp = (dispatch) => {
  return {
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(null, mdp)(PostForm);
