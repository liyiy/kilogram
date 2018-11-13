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
        <p>{props.currentUser.username}</p>
        <button onClick={logout}>LOGOUT</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/login'>Log In</Link>
        <Link to ='/signup'>Sign Up</Link>
      </div>
    );
  }
};


export default connect(msp, mdp)(Greeting);
