import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import { openModal, showFollowers, showFollowings, editProfilePic } from '../../actions/modal_actions';
import ProfilePostsContainer from './profile_posts_container';
import ProfilePicContainer from './profile_pic_container';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import Follow from '../follows/follow';

const msp = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const currentUser = state.session.id;
  let numPosts;
  let username;
  let numFollowers;
  let numFollowings;
  let followers;
  let followings;
  let user;

  if (state.entities.users[userId]) {
    user = state.entities.users[userId];
    numPosts = state.entities.users[userId].numPosts;
    username = state.entities.users[userId].username;
    numFollowers = state.entities.users[userId].numFollowers;
    numFollowings = state.entities.users[userId].numFollowings;
    followers = Object.values(state.entities.users).filter(user => {
      if (state.entities.users[userId].allFollowers.includes(user.id)) {
        return user;
      }
    });
    followings = Object.values(state.entities.users).filter(user => {
      if (state.entities.users[userId].allFollowings.includes(user.id)) {
        return user;
      }
    });
  } else {
    numPosts = 0;
  }

  return {
    user: user,
    numPosts: numPosts,
    userId: userId,
    username: username,
    numFollowers: numFollowers,
    numFollowings: numFollowings,
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
    showFollowers: (modal, followers) => dispatch(showFollowers(modal, followers)),
    showFollowings: (modal, followings) => dispatch(showFollowings(modal, followings))
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
    let logout;
    if (this.props.userId === this.props.currentUser) {
      newpost =
        (<button className="new-post-btn" onClick={() => dispatch(openModal('createPost'))}>
          New Post
        </button>);
      logout = (<button onClick={(loggingout)} className="new-post-btn">Log Out</button>);

    } else {
      follow = (<Follow user={this.props.user} />);
    }

    // <img className="setting-icon"src={window.settingIcon} onClick={(loggingout)}></img>
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
            {logout}
            </div>
            <div className="profile-counts">
            <p>{this.props.numPosts} posts</p>
            <p onClick={() => this.props.showFollowers('showFollowers', this.props.followers )}>
              {this.props.numFollowers} followers
            </p>
            <p onClick={() => this.props.showFollowings('showFollowings', this.props.followings )}>
              {this.props.numFollowings} following
            </p>
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
