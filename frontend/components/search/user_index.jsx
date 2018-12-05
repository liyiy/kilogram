import React from 'react';

const UserIndex = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
          {user.username}
      </li>
    ))}
  </ul>
);

export default UserIndex;
