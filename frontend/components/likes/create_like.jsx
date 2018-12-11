import React from 'react';
import { createLike, deleteLike } from '../../actions/like_actions';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  let userLikes;
  const post = ownProps.post;
  if (ownProps.post.userLikes) {
   userLikes = ownProps.post.userLikes;
   } else {
     userLikes = [];
   };

  const currentUserId = state.session.id;
  const liked = userLikes.includes(state.session.id);

  return {
    currentUserId,
    userLikes,
    liked,
    post
  };

}

const mdp = (dispatch) => {
  return {
    createLike: (like, user) => dispatch(createLike(like, user)),
    deleteLike: (like, likeableId, user) => dispatch(deleteLike(like, likeableId, user))
  };
};

class CreateLike extends React.Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.state = {likeable_type: "Post",
      likeable_id: this.props.post.id,
      user_id: this.props.currentUserId,
      disable: false}
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.liked && this.state.disable == false) {
      this.setState({disable: true});
      this.props.deleteLike(this.state, this.props.post.id, this.props.currentUserId).then(() => this.setState({disable: false}));
    } else if (this.state.disable == false) {
      this.setState({disable: true});
      this.props.createLike(this.state, this.props.currentUserId).then(() => this.setState({disable: false}));
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
