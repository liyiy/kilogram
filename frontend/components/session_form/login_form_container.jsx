import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <div>Don't have an account? <Link className="form-btn" to="/signup"> Sign Up</Link></div>
  };
};

const mdp = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
