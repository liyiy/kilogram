import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';

const msp = (state) => {
  const currentUser = state.session.id;

  const userPosts = Object.values(state.entities.posts).map(post => {
    if (post.poster_id === currentUser) {
      return post
    }
  });

  return {
    posts: userPosts
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

class ProfilePostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const posts = this.props.posts.map(post => {
      return (
        <li key={post.id} className="profile-post-index-item">
          <div>{post.description}
          <img src={post.imageUrl}/>
          </div>
        </li>
      )
    });
    return (
      <main className="profile-post-index">
      <br/>
        <ul className="profile-post-list">
          {posts}
        </ul>
      </main>
    );
  };
}


export default (connect(msp, mdp)(ProfilePostsContainer));
