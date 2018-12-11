export const fetchUsers = (username) => {

  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { username }
  });
};

export const fetchUser = (user) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}`
  });
};

export const fetchSearch = (username) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users/search',
    data: { username }
  })
}
