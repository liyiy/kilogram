import React from 'react';
import { connect } from 'react-redux';
import { editProfilePic } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let userPic;
  let user;
  if (ownProps.user && ownProps.user.imageUrl) {
    userPic = ownProps.user.imageUrl;
  }
  if (ownProps.user) {
    user = ownProps.user;
  }
  return {
    user: user,
    userPic: userPic
  };
};

const mdp = (dispatch) => {
  return {
    editProfilePic: (user) => dispatch(editProfilePic('editProfilePic', user))
  }
}

const ProfilePicContainer = (props) => {
  let pic;
  if (props.userPic === undefined) {
    pic = window.defaultProPic;
  } else {
    pic = props.userPic;
  }

  return (
    <img className="profile-pic" src={pic}></img>
  );
};

export default connect(msp, null)(ProfilePicContainer);
