export const createFollow = (follow, userId) => {

  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  });
};

export const deleteFollow = (currUserId, userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${currUserId}`,
    data: { currUserId, userId }

  });
};
