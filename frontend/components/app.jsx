import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import Greeting from './greeting/greeting';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
const App = () => {
  return (
    <div>
    <header>
    <h1>k i l o g r a m</h1>
    </header>
    <Route exact path="/" component={LoginFormContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
    </div>
  );
};

export default App;
