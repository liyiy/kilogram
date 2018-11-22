import React from 'react';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {

  const currUserId = state.session.id;

  let userFollowers;
  let followed;
  let userId;
   if (ownProps.user) {
     userId = ownProps.user.id;
     userFollowers = ownProps.user.allFollowers;
     followed = userFollowers.includes(state.session.id);
   }
   //
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
  }


  handleFollow(e) {
    e.preventDefault();
    if (this.props.followed) {
      this.props.deleteFollow(this.props.currUserId, this.props.userId);
    } else {

      this.props.createFollow({follower_id: this.props.currUserId, followee_id: this.props.userId}, this.props.userId);
    }
  }


  render(){
    let isFollowed;
    let followClass;

    if (this.props.followed) {
      isFollowed = "Unfollow";
      followClass="unfollow-btn";
    } else {
      isFollowed = "Follow"
      followClass="follow-btn";
    };

    return (
      <button className={followClass} onClick={this.handleFollow}>{isFollowed}</button>
    );
  }
}


export default connect(msp, mdp)(Follow);
