import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">Don't have an account? Sign Up</Link>
  };
};

const mdp = (dispatch) => {
  return {
    action: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
