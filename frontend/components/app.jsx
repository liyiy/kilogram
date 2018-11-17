import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Link,
  HashRouter,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal';
import Greeting from './greeting/greeting';
import NavBar from './navbar';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import PostIndex from './posts/post_index';
import ProfileContainer from './profile/profile_container';


const App = () => {
  return (
    <div className="big-div">
    <Modal />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/" component={NavBar} />
    <Route exact path="/" component={PostIndex} />
    <Route exact path="/users/:userUsername" component={ProfileContainer} />
    </div>
  );
};

export default App;
