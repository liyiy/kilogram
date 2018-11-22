import React from 'react';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  const userPic = ownProps.user.imageUrl;
  return {
    userPic: userPic
  };
};

const ProfilePicContainer = (props) => {
  let pic;
  if (props.userPic === undefined) {
    pic = window.defaultProfilePic;
  } else {
    pic = props.userPic;
  }

  return (
    <img className="profile-pic" src={pic}></img>
  );
};

export default connect(msp, null)(ProfilePicContainer);
