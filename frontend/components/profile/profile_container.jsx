import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePostsContainer from './profile_posts_container';
import { fetchPosts } from '../../actions/post_actions';


const msp = (state) => {
  const currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    loggedIn: Boolean(currentUserId)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const loggingout = () => {
      return logout().then(this.props.history.push("/login"))
    }

    return (
      <div>
        <div className="profile-container">
          <div className="profile-header">
          <div className="profile-nav">
            <div className="profile-user">{this.props.currentUser.username}</div>
            <button className="new-post-btn" onClick={() => dispatch(openModal('createPost'))}>
              New Post
            </button>
            <button onClick={loggingout}>LOGOUT</button>
            </div>
          <p>{this.props.currentUser.posts.length} posts</p>
          </div>
        </div>
        <div className="profile-posts-container">
          <ProfilePostsContainer />
        </div>
      </div>
      );
  };
};


export default withRouter(connect(msp, mdp)(ProfileContainer));
