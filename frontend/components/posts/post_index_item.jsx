import React from 'react';
import { connect } from 'react-redux';
import PostComments from '../comments/post_comments';
import CommentForm from '../comments/comment_form';
import CreateLike from '../likes/create_like';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ user, post, userId, currentUserId, username }) => {
  let userpic;
  if (user.imageUrl) {
    userpic = user.imageUrl;
  } else {
    userpic = window.defaultProPic;
  }

    return (
      <li key={post.id} className="post-index-item">
        <div>
          <div className="post-feed-img-head">
            <img className="post-prof-pic" src={userpic}></img>
            <Link className="no-underline" to={`/users/${userId}`}>{username}</Link>
          </div>
          <div className="post-feed-img"><img src={post.imageUrl}/></div>
          <div className="post-bottom">
            <div className="like-button">
              <CreateLike post={post} />
            </div>
            <div className="num-likes">
              {post.numLikes} likes
            </div>
            <div className="post-bottom-name">
              {username}&nbsp; <a className="post-descrip">{post.description}</a>
            </div>
          </div>
          <div className="post-comments">
            <PostComments postId={post.id} />
          </div>
          <CommentForm postId={post.id} />
        </div>
      </li>
    );

}

export default PostIndexItem;
