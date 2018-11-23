import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PostFormContainer from './posts/post_form_container';
import PostShow from './posts/post_show';
import ShowFollows from './follows/show_follows';
import LogOutContainer from './profile/logout_container';
import EditProfilePicContainer from './profile/edit_profile_pic_container';


const msp = state => {
  return {
    modal: state.ui.modal,
    post: state.ui.post,
    follows: state.ui.follows
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

function Modal({modal, post, user, follows, closeModal}) {
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
    case 'showFollowers':
      component = <ShowFollows followers={follows} />;
      break;
    case 'showFollowings':
      component = <ShowFollows followings={follows} />;
      break;
    case 'logout':
      component = <LogOutContainer />;
      break;
    case 'editProfilePic':
      component = <EditProfilePicContainer user={user}/>;
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


export default connect(msp, mdp)(Modal);
