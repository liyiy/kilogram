export const fetchLikes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/likes/`
  });
};



export const createLike = (like, user) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: { like }
  });
};

export const deleteLike = (id, user) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  });
};
