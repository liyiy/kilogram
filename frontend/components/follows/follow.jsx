import React from 'react';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {

  const currUserId = state.session.id;

  let userFollowers;
  let followed;
  let userId;
  debugger 
   if (ownProps.user) {
     userId = ownProps.user.id;
     userFollowers = ownProps.user.allFollowers;
     followed = userFollowers.includes(state.session.id);
   }
  // const currentUserId = state.session.id;
  // const followed = userFollowers.includes(state.session.id);
  return {
    currUserId,
    userId,
    userFollowers,
    followed
  };

}

const mdp = (dispatch) => {
  return {
    createFollow: (follow, userId) => dispatch(createFollow(follow, userId)),
    deleteFollow: (followId, userId) => dispatch(deleteFollow(followId, userId))
  };
};

class Follow extends React.Component {

  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    // this.state = {follower_id: this.props.currUserId, followee_id: this.props.userId}
  }


  handleFollow(e) {
    e.preventDefault();
    if (this.props.followed) {
      // const followId = Object.values(this.props.follows).
      this.props.deleteFollow(this.props.currUserId, this.props.userId);
    } else {

      this.props.createFollow({follower_id: this.props.currUserId, followee_id: this.props.userId}, this.props.userId);
    }
  }


  render(){
    let isFollowed;
    debugger
    if (this.props.followed) {
      isFollowed = "Unfollow";
    } else {
      isFollowed = "Follow"
    };

    return (
      <button onClick={this.handleFollow}>{isFollowed}</button>
    );
  }
}


export default connect(msp, mdp)(Follow);
