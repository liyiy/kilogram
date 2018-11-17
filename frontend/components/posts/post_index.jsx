import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';

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

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    debugger 
    const posts = this.props.posts.map(post => {
      return (
        <li key={post.id} className="post-index-item">
          <div>{post.description}
          woohoo!
          <img src={post.imageUrl}/>
          </div>
        </li>
      )
    });


    return (
      <main className="post-index">
      <br/>
        <ul className="post-list">
          {posts}
        </ul>
      </main>
    );
  };
}


export default withRouter(connect(msp, mdp)(PostIndex));
