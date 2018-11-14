export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

// export const demoLogin = ({username: "demo", password: "demopassword"}) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/session',
//     data: {user: {username: "demo", password: "demopassword"}}
//   })
// }
