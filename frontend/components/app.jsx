import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Link,
  HashRouter,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Greeting from './greeting/greeting';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
const App = () => {
  return (
    <div className="big-div">
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/" component={Greeting} />
    </div>
  );
};

export default App;
