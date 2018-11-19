import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PostFormContainer from './posts/post_form_container';
import PostShow from './posts/post_show';



function Modal({modal, post, closeModal}) {
  if(!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createPost':
      component = <PostFormContainer />;
      break;
    case 'showPost':
      component = <PostShow post={post}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const msp = state => {
  return {
    modal: state.ui.modal,
    post: state.ui.post
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
