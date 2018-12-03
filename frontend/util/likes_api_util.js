export const createLike = (like, user) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: { like }
  });
};

export const deleteLike = (like, likeableId, user) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${likeableId}`,
    data: { like }
  });
};
