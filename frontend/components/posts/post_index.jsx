import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/post_actions';

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <li key={post.id} className="post-index-item">
          <Link to={`/posts/${post.id}`}>{post.description}</Link>
        </li>
      )
    });
    return (
      <main className="post-index">
        <ul className="post-list">
          {posts}
        </ul>
      </main>
    );
  };

  const msp = state => {
    const posts = Object.values(state.entities.posts);
    return {
      posts,
      loggedIn: Boolean(state.session.currentUserId),
    };
  };

  const mdp = dispatch => {
    return {
      fetchPosts: () => dispatch(fetchPosts()),
    };
  };
}

export default connect(msp, mdp)(PostIndex);
