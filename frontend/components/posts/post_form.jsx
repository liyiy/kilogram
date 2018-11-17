import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = { image_url: "test", description: "", imageUrl: null, imageFile: null  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[image_url]', this.state.image_url);
    formData.append('post[description]', this.state.description);
    if (this.state.imageFile) {
      formData.append('post[photo]', this.state.imageFile);
    }
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
    // const post = Object.assign({}, this.state);
    // this.props.createPost(post).then(this.props.closeModal);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null })
    }
  }

  render() {
    const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    return (
      <div className="post-form-container">

        <form onSubmit={this.handleSubmit} className="post-form-box">

          <h3 className="post-form-header">New Post</h3>
          <br/>
          <div className="post-form">
            <input type="file"
              onChange={this.handleFile}/>
            <br/>
            <a>Image Preview</a>
            <div className="preview">{preview}</div>
            <br/>
            <div className="post-form-label">Description</div>
            <textarea rows="3" cols="45"
              value={this.state.description}
              onChange={this.update('description')}
            />
            <br/>
            <input onClick={this.props.closeModal}
              className="post-form-submit" type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
