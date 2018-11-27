import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';


const mdp = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  };
};


class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.post.id).then(dispatch(closeModal()));
  }

  render() {

    if (!this.props.post) return <></>;

    let deleteButton;
      if (this.props.post.currUser === this.props.post.post.poster_id) {
        deleteButton = (
          <button className="delete-post-button" onClick={this.handleDelete}>
            Delete Post
          </button>
        );
      };
    return(
      <div className="post-show">
        <img src={this.props.post.post.imageUrl} />
        <div className="post-show-right">
          {deleteButton}
        </div>
      </div>
    );
  }
}



export default withRouter(connect(null, mdp)(PostShow));
