import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
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

const Greeting = ({ currentUser, loggedIn, logout, history }) => {

  const loggingout = () => {
    return logout().then(history.push("/login"))
  }
  if (loggedIn) {
    return (
      <div>
        <div className="nav">
        <p>{currentUser.username}</p>
        <p>?????what</p>
        <button onClick={loggingout}>LOGOUT</button>
        </div>
      </div>
    );
  } else {
    return (
      null
    );
  }
};


export default withRouter(connect(msp, mdp)(Greeting));
