import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';

const msp = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId]
  debugger
  return {
    post
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
  };
};

class PostShow extends React.Component {

  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post.id)
  }

  render() {
    return(
      <div className="post-show">
        is this working
        <img src={this.props.post.imageUrl}/>
      </div>
    );
  }
};

export default withRouter(connect(msp, mdp)(PostShow));
