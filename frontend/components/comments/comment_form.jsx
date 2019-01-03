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
    this.handleEnter = this.handleEnter.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.state["body"] != "") {
      this.props.createComment(this.state);
      this.setState({ ["body"]: "" });
    }
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {

    return (
      <section className="comment-form-box">
        <div className="comment-form">
            <textarea
              className="comment-form-form"
              rows="3"
              cols="30"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Add a comment..."
              onKeyDown={this.handleEnter}
            />
        </div>
      </section>
    );
  }

}

export default withRouter(connect(null, mdp)(CommentForm));
