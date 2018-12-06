import React from 'react';
import { Link } from 'react-router-dom';

const UserIndex = ({ users }) => (
  <div className="search-results">
    {users.map(user => (
      <Link className="no-underline" to={`/users/${user.id}`}>
        <li key={user.id}>
          {user.username}
        </li>
     </Link>
    ))}
  </div>
);

export default UserIndex;
