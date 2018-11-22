export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_POST = 'OPEN_POST';
export const EDIT_PROFILE_PIC = 'EDIT_PROFILE_PIC';

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

export const editProfilePic = (modal, user) => {
  return {
    type: EDIT_PROFILE_PIC,
    modal, user
  };
};
