export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_POST = 'OPEN_POST';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openPost = (modal, post) => {
  return {
    type: OPEN_POST,
    modal, post
  };
};
