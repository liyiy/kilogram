import React from 'react';
import { connect } from 'react-redux';
import PostComments from '../comments/post_comments';
import CommentForm from '../comments/comment_form';

const PostIndexItem = ({ post, user, currentUserId }) => {

    return (
      <li key={post.id} className="post-index-item">
        <div>
          <div className="post-feed-img-head">
            {user}
          </div>
          <div className="post-feed-img"><img src={post.imageUrl}/></div>
          <div className="post-bottom">
            <div className="post-bottom-name">
            {user}
            </div>
            <div className="post-description">
              {post.description}
            </div>
          </div>
          <div className="post-comments">
            <PostComments postId={post.id} />
            <CommentForm postId={post.id} />
          </div>
        </div>
      </li>
    );

}

export default PostIndexItem;
