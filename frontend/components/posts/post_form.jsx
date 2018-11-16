import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createPost } from '../actions/post_actions';


class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = { image_url: "", description: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post).then(this.props.closeModal);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  render() {
    return (
      <div className="post-form-container">
        {this.props.otherForm}
        <form onSubmit={this.handleSubmit} className="post-form-box">
          NEW POST
          <br/>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div className="post-form">
            <br/>
            <label>Image Link</label>
            <input type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')}
            />
            <br/>
            <label>Description</label>
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
            />
            <br/>
            <input type="submit" value="create" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
