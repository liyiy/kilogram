export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_POST = 'OPEN_POST';
export const SHOW_FOLLOWERS = 'SHOW_FOLLOWERS';
export const SHOW_FOLLOWINGS = 'SHOW_FOLLOWINGS';
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

export const openPost = (modal, post, postComments, currUser) => {
  return {
    type: OPEN_POST,
    modal, post, postComments, currUser
  };
};

export const showFollowers = (modal, followers) => {
  return {
    type: SHOW_FOLLOWERS,
    modal, followers
  };
};

export const showFollowings = (modal, followings) => {
  return {
    type: SHOW_FOLLOWINGS,
    modal, followings
  }
}

export const editProfilePic = (modal, user) => {
  return {
    type: EDIT_PROFILE_PIC,
    modal, user
  };
};
