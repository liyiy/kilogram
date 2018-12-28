import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { openPost } from '../../actions/modal_actions';
import PostItem from '../posts/post_item';
// import PostComments from '../comments/post_comments';

const msp = (state, ownProps) => {
  const userId = ownProps.userId;
  const currentUser = state.session.id;

  const userPosts = Object.values(state.entities.posts).map(post => {
    if (post.poster_id === ownProps.userId) {
      return post;
    }
  });
  return {
    posts: userPosts.reverse(),
    currentUser: currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    openPost: (modal, post, postComments, currUserId) => dispatch(openPost(modal, post, postComments, currUserId))
  };
};

class ProfilePostsContainer extends Component {

  render() {
    let posts;

    posts = this.props.posts.map((post) => {
      if (post !== undefined) {
       return (
           <PostItem
            key={post.id}
            post={post}
            openPost={() => this.props.openPost('showPost', post, post.comments, this.props.currentUser)}
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
