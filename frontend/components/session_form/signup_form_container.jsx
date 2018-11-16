import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { removeErrors } from '../../actions/session_actions';


const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <div>Have an account? <Link className="form-btn" to="/login">Log in</Link> </div>
  };
};

const mdp = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
