export const createFollow = (follow, user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  });
};

export const deleteFollow = (id, user) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  });
};
