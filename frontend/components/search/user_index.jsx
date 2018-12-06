import React from 'react';

const UserIndex = ({ users }) => (
  <div className="search-results">
    {users.map(user => (
      <li key={user.id}>
          {user.username}
      </li>
    ))}
  </div>
);

export default UserIndex;
