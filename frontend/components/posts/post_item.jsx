import React from 'react';
import { openModal } from '../../actions/modal_actions';

const PostItem = ({ post }) => {

  // handlePostShow(e) {
  //   e.preventDefault();
  //   dispatch(openModal('showPost'));
  //
  // }

  return (
    <li key={post.id} className="profile-post-index-item">
        <div className="profile-post-list-img">
          <img onClick={() => dispatch(openModal('showPost'))} src={post.imageUrl} />
        </div>
    </li>
  );
};

export default PostItem;
