import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';


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

const NavBar = ({ currentUser, loggedIn, logout, history }) => {
  const loggingout = () => {
    return logout().then(history.push("/login"))
  }
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

        <button onClick={loggingout}>LOGOUT</button>
        <img onClick={() => dispatch(openModal('createPost'))}
             className="add-post-btn"
            src={window.newPostLogo}></img>
      </div>
    </div>
  )
};

export default withRouter(connect(msp, mdp)(NavBar));
