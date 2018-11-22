import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class EditProfilePicContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { imageUrl: null, imageFile: null  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // formData.set('post[image_url]', this.state.image_url);
    // formData.set('post[description]', this.state.description);
    if (this.state.imageFile) {
      formData.set('user[photo]', this.state.imageFile);
    }
    const history = this.props.history;
    $.ajax({
      url: `/api/users/${user.id}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    }).then(this.props.closeModal);

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
      this.setState({ imageFile: null })
    }
  }
}

export default EditProfilePicContainer;
