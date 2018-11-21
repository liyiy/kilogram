import React from 'react';
import { connect } from 'react-redux';
import PostComments from '../comments/post_comments';
import CommentForm from '../comments/comment_form';
import CreateLike from '../likes/create_like';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, userId, currentUserId, username }) => {

    return (
      <li key={post.id} className="post-index-item">
        <div>
          <div className="post-feed-img-head">
            <Link to={`/users/${userId}`}>{username}</Link>
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
              {username}
            </div>
            <div className="post-description">
              {post.description}
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
