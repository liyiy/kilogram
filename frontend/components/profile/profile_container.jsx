import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePostsContainer from './profile_posts_container';


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
          <div className="profile-header">
          <div className="profile-nav">
            <div className="profile-user">{currentUser.username}</div>
            <button className="new-post-btn" onClick={() => dispatch(openModal('createPost'))}>
              New Post
            </button>
            <button onClick={loggingout}>LOGOUT</button>
            </div>
          <p>{currentUser.posts.length} posts</p>
          </div>
        </div>
        <div className="profile-posts-container">
          <ProfilePostsContainer />
        </div>
      </div>
    );

  };


export default withRouter(connect(msp, mdp)(ProfileContainer));
