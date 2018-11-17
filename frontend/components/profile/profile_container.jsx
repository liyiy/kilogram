import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


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

const ProfileContainer = ({ currentUser, logout, history }) => {
  const loggingout = () => {
    return logout().then(history.push("/login"))
  }

    return (
      <div>
        <div className="profile-container">
        <p>{currentUser.username}</p>
        <p>{currentUser.posts.length} posts</p>
        <button onClick={() => dispatch(openModal('createPost'))}>
          Create Post
        </button>
        </div>
      </div>
    );

  };


export default withRouter(connect(msp, mdp)(ProfileContainer));
