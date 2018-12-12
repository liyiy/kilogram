import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicContainer from '../profile/profile_pic_container';

const ShowFollows = (props) => {

  let followers;
  let followings;
  let followHeader;
  if (props.followers) {
     followers = props.followers.map(follower => {
      return (
        <li key={follower.id}><Link
        className="follows-link"
        to={`/users/${follower.id}`}>
        <ProfilePicContainer user={follower}/>
        {follower.username}
        </Link>
        </li>
      );
    });
    followHeader = "Followers";
  }

  if (props.followings) {
     followings = props.followings.map(following => {
      return (
        <li key={following.id}><Link
        className="follows-link"
        to={`/users/${following.id}`}>
        <ProfilePicContainer user={following}/>
        {following.username}
        </Link></li>
      );
    });
    followHeader = "Following";
  }

  return (
    <div className="follows">
      <h3>{followHeader}</h3>
      <ul className="follows-list">
        {followers}
        {followings}
      </ul>
    </div>
  );
}




export default ShowFollows;
