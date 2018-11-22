import React from 'react';
import { createLike, deleteLike } from '../../actions/like_actions';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {

  const userLikes = ownProps.post.userLikes;
  const currentUserId = state.session.id;
  const liked = userLikes.includes(state.session.id);

  return {
    currentUserId,
    userLikes,
    liked
  };

}

const mdp = (dispatch) => {
  return {
    createLike: (like, user) => dispatch(createLike(like, user)),
    deleteLike: (likeId, user) => dispatch(deleteLike(likeId, user))
  };
};

class CreateLike extends React.Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.state = {likeable_type: "Post", likeable_id: this.props.post.id}
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.liked) {
      this.props.deleteLike(this.props.post.id, this.props.currentUserId);
    } else {
      this.props.createLike(this.state, this.props.currentUserId);
    }
  }


  render(){
    let heart;

    if (this.props.liked) {
      heart = window.heartLiked;
    } else {
      heart = window.heartUnliked;
    };

    return (
      <img className="heart-unliked" onClick={this.handleLike} src={heart}></img>
    );
  }
}


export default connect(msp, mdp)(CreateLike);
