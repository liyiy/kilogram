import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import PostItem from '../posts/post_item';

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
    let posts;

    //  posts = this.props.posts.map((post, idx) => {
    //    if (post !== undefined) {
    //   return (
    //     <li key={post.id} className="profile-post-index-item">
    //         <div className="profile-post-list-img">
    //           <img onClick={() => dispatch(openModal('showPost'))} src={post.imageUrl} post={post.id}/>
    //         </div>
    //     </li>
    //   )
    // }
    // });

    posts = this.props.posts.map((post) => {
      if (post !== undefined) {
       return (
         <Link key={post.id} to={`/posts/${post.id}`}>
           <PostItem
            key={post.id}
            post={post} />
         </Link>
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
