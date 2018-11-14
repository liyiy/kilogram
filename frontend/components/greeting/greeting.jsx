import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

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

const Greeting = ({ currentUser, loggedIn, logout }) => {
  if (loggedIn) {
    return (
      <div>
        <p>{currentUser.username}</p>
        <button onClick={logout}>LOGOUT</button>
      </div>
    );
  } else {
    return (
      null
    );
  }
};


export default connect(msp, mdp)(Greeting);
