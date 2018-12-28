import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const msp = (state, ownProps) => {

  const comments = Object.values(state.entities.comments).map(comment => {
    if (comment.post_id === ownProps.postId) {
      return ({userId: comment.user_id, body: comment.body, id: comment.id, username: comment.username});
    }
  });
  const users = state.entities.users;
  return {
    comments: comments,
    users: users
  };
};


class PostComments extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let comments;
     comments = this.props.comments.map((comment,idx) => {
      if (comment) {
       return (
        <li key={idx}>
          <div className="post-comment">
            <div className="post-comment-username">
              <Link className="no-underline" to={`/users/${comment.userId}`}>
                {this.props.users[comment.userId].username}
              </Link> &nbsp;
             <a className="post-comment-body">
               {comment.body}
             </a>
           </div>
         </div>
        </li>
      );
    }});

    return (
      <div>
        <ul className="all-comments">
          {comments}
        </ul>
      </div>
    );
  }

}

export default (connect(msp, null)(PostComments));
