export const createFollow = (follow, userId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { userId }
  });
};

export const deleteFollow = (id, userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  });
};
