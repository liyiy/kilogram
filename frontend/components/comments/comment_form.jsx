import React from 'react';
import { connect } from 'react-redux';
import { createComment, fetchComments } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mdp = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: () => dispatch(fetchComments())
  };
};

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {post_id: this.props.postId, body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state);
    this.setState({ ["body"]: "" });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {

    return (
      <section className="comment-form-box">
        <div className="comment-form">
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="comment-form-form"
              rows="3"
              cols="30"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Add a comment..."
            />
          <input type="submit" />
          </form>
        </div>
      </section>
    );
  }

}

export default withRouter(connect(null, mdp)(CommentForm));
