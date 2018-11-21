import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { openPost } from '../../actions/modal_actions';
import PostItem from '../posts/post_item';

const msp = (state, ownProps) => {
  const userId = ownProps.userId;
  const currentUser = state.session.id;

  const userPosts = Object.values(state.entities.posts).map(post => {
    if (post.poster_id === ownProps.userId) {
      return post
    }
  });
  return {
    posts: userPosts.reverse()
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    openPost: (modal, post) => dispatch(openPost(modal, post))
  };
};

class ProfilePostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let posts;

    posts = this.props.posts.map((post) => {
      if (post !== undefined) {
       return (
           <PostItem
            key={post.id}
            post={post}
            openPost={() => this.props.openPost('showPost', post)}
            />
         );
       }
       });

    return (
      <main className="profile-post-index">
        <ul className="profile-post-list">
          {posts}
        </ul>
      </main>
    );
  };

}


export default (connect(msp, mdp)(ProfilePostsContainer));
