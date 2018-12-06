import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import Search from './search/search';

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

  const profilePage = () => {
    return history.push(`/users/${currentUser.id}`)
  }

  return (
    <div className="nav">
      <Link className="left-nav-link" to="/">
      <div className="left-nav">
        <img className="logo-icon" src={window.instaLogo}></img>
        <div></div>
        <span className="left-nav-title">Kilogram</span>
      </div>
      </Link>
        <Search />
      <div className="right-nav">
        <img className="profile-icon" src={window.profileLogo}
             onClick={profilePage}>
        </img>
      </div>
    </div>
  )
};

export default withRouter(connect(msp, mdp)(NavBar));
