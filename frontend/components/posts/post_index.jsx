import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';
import CommentForm from '../comments/comment_form';
import PostIndexItem from './post_index_item';

const msp = state => {
  const posts = Object.values(state.entities.posts);
  const users = (state.entities.users);
  const currentUserId = state.session.currentUserId

  return {
    posts,
    users,
    currentUserId,
    loggedIn: Boolean(state.session.currentUserId)
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments()),
  };
};

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    this.props.fetchComments();
  }


  render() {
    const {users, currentUserId} = this.props;
    let posts;
    posts = this.props.posts.map(post => {
      if (users[post.poster_id]) {
        return (
          <PostIndexItem
            key={post.id}
            post={post}
            userId={users[post.poster_id].id}
            username={users[post.poster_id].username}
            currentUserId={currentUserId}
            />
        );
      } else {
        null;
      }
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
