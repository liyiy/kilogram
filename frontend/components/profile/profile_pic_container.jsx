import React from 'react';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  let userPic;
  if (ownProps.user.imageUrl) {
    userPic = ownProps.user.imageUrl;
  }
  return {
    userPic: userPic
  };
};

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
