import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  };
};

const LogOutContainer = (props) => {
  const loggingout = () => {
    return logout().then(history.push("/login"))
  }

  return (
    <div>
      <button onClick={loggingout}>LOGOUT</button>
      <button onClick={props.closeModal}>Cancel</button>
    </div>
  );
}

export default connect(null, mdp)(LogOutContainer);
