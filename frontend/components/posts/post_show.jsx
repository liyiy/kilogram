import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
// import CommentForm from '../comments/comment_form';

// const msp = (state) => {
//   let currUser;
//   if (state.ui.post.currUser) {
//     currUser = state.ui.post.currUser;
//   }
//   return {
//     currUser: currUser
//   };
// };
const mdp = (dispatch) => {
  return {
    deletePost: (post) => dispatch(deletePost(post))
  };
};


class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.post).then(dispatch(closeModal()));
  }

  render() {
    let deleteButton;
      if (this.props.post.currUser === this.props.post.post.poster_id) {
        deleteButton = (
          <button className="delete-post-button" onClick={this.handleDelete}>
            Delete Post
          </button>
        );
      };

    let comments;
    if (this.props.post.comments) {
    comments = this.props.post.comments.map((comment, idx) => {
      if (comment) {
        return (
          <li key={idx}>
            <div className="post-comment">
              <div className="post-comment-username">
                <Link className="no-underline" to={`/users/${comment.userId}`}>
                  {comment.username}
                </Link> &nbsp;
             <a className="post-comment-body">
                  {comment.body}
                </a>
              </div>
            </div>
          </li>
        );
      }
    })
  };

    if (comments) {
      comments.reverse();
    }

    return(
      
      <div className="post-show">
        <img src={this.props.post.post.imageUrl} />
        
        <div className="post-modal-comments">
          <div className="post-show-right">
            {deleteButton}
          </div>
          
          <div className="post-modal-comments-header">
            {this.props.post.post.poster_username}
            <div>
              {this.props.post.post.description}
            </div>
          </div>
          <div className="post-modal-all-comments">
            {comments}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, mdp)(PostShow));
