import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ProfilePostsContainer from './profile_posts_container';
import ProfilePicContainer from './profile_pic_container';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import Follow from '../follows/follow';

const msp = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId)
  const currentUser = state.session.id;
  let numPosts;
  let username;
  let followers;
  let followings;
  let user;

  if (state.entities.users[userId]) {
    user = state.entities.users[userId];
    numPosts = state.entities.users[userId].numPosts;
    username = state.entities.users[userId].username;
    followers = state.entities.users[userId].numFollowers;
    followings = state.entities.users[userId].numFollowings;
  } else {
    numPosts = 0;
  }
  return {
    user: user,
    numPosts: numPosts,
    userId: userId,
    username: username,
    followers: followers,
    followings: followings,
    currentUser: currentUser,
    loggedIn: Boolean(currentUser)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
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
      return this.props.logout().then(this.props.history.push("/login"))
    }

    let newpost;
    let follow;
    if (this.props.userId === this.props.currentUser) {
      newpost =
        (<button className="new-post-btn" onClick={() => dispatch(openModal('createPost'))}>
          New Post
        </button>);
    } else {
      follow = (<Follow user={this.props.user} />);
    }
    return (

      <div>
        <div className="profile-container">
          <ProfilePicContainer user={this.props.user}/>
          <div className="profile-header">
          <div className="profile-nav">
            <div className="profile-user">
              {this.props.username}
            </div>
            {follow}
            {newpost}
            <img className="setting-icon"src={window.settingIcon} onClick={loggingout}></img>
            </div>
            <div className="profile-counts">
            <p>{this.props.numPosts} posts</p>
            <p>{this.props.followers} followers</p>
            <p>{this.props.followings} following</p>
            </div>
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
