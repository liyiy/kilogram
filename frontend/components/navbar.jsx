import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';

const msp = (state) => {
  const currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    loggedIn: Boolean(currentUserId)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const NavBar = () => {
  return (
    <div className="nav">
      <Link className="left-nav-link" to="/">
      <div className="left-nav">
        <img src={window.instaLogo}></img>
        <div></div>
        <span className="left-nav-title">Kilogram</span>
      </div>
      </Link>
      <div className="right-nav">
        <img src={window.newPostLogo}></img>
      </div>
    </div>
  )
};

export default withRouter(connect(msp, mdp)(NavBar));
