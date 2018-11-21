import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePostsContainer from './profile_posts_container';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';


const msp = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId)
  const currentUser = state.session.id;
  // const user = state.entities.users[userId]
  let numPosts;
  let user;
  if (state.entities.users[userId]) {
    numPosts = state.entities.users[userId].numPosts;
    user = state.entities.users[userId].username;

  } else {
    numPosts = 0;
  }

  // const numPosts = state.entities.users[userId].posts.length
  return {
    numPosts: numPosts,
    userId: userId,
    user: user,
    currentUser: currentUser,
    loggedIn: Boolean(currentUser)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render() {
    const loggingout = () => {
      return logout().then(this.props.history.push("/login"))
    }

    let newpost;

    if (this.props.userId === this.props.currentUser) {
       newpost =
          <button className="new-post-btn" onClick={() => dispatch(openModal('createPost'))}>
            New Post
          </button>
      }
     else {
        newpost = null;
      }

    return (
      <div>
        <div className="profile-container">
          <div className="profile-header">
          <div className="profile-nav">
            <div className="profile-user">{this.props.user}</div>
            {newpost}
            <button onClick={loggingout}>LOGOUT</button>
            </div>
          <p>{this.props.numPosts} posts</p>
          </div>
        </div>
        <div className="profile-posts-container">
          <ProfilePostsContainer userId={this.props.userId}/>
        </div>
      </div>
      );
  };
};


export default withRouter(connect(msp, mdp)(ProfileContainer));
