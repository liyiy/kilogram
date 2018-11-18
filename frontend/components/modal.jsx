import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from './posts/post_form_container';
import PostShow from './posts/post_show';



function Modal({modal, closeModal}) {
  if(!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createPost':
      component = <PostFormContainer />;
      break;
    case 'editPost':
      component = <PostShow />;
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
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
