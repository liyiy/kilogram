import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = state => {
  const posts = Object.values(state.entities.posts);
  const users = (state.entities.users);
  return {
    posts,
    users,
    loggedIn: Boolean(state.session.currentUserId)
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <li key={post.id} className="post-index-item">
          <div>
            <div className="post-feed-img-head">
              {this.props.users[post.poster_id].username}
            </div>
            <div className="post-feed-img"><img src={post.imageUrl}/></div>
            <div className="post-bottom">
              <div className="post-bottom-name">
              {this.props.users[post.poster_id].username}
              </div>
              <div className="post-description">
                {post.description}
              </div>
            </div>
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
