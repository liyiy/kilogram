import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicContainer from '../profile/profile_pic_container';

const UserIndex = ({ users, display }) => {
  return (
  <div className={display}>
    {users.map(user => (
      <Link key={user.id} className="no-underline search-pic" to={`/users/${user.id}`}>
        <li key={user.id}>

            <ProfilePicContainer user={user}/>

          <div>{user.username}</div>
        </li>
     </Link>
    ))}
  </div>
);
};

export default UserIndex;
