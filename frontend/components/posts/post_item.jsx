import React from 'react';
import { openModal, openPost } from '../../actions/modal_actions';


const mdp = (dispatch) => {
  return {
    openPost: (post) => dispatch(openPost('showPost', post))
  };
};

const PostItem = (props) => {

  return (
    <li key={props.post.id} className="profile-post-index-item">
        <div className="profile-post-list-img" onClick={props.openPost}>
          <img src={props.post.imageUrl} />
        </div>
    </li>
  );
};

export default PostItem;
