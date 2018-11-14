import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = {username: 'demo', password: 'demopass'};
    dispatch(login(demo));
  }

  update(field) {
    return (e) =>
    this.setState({[field]: e.target.value})
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Kilogram</h2>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
          />
        <br/>
          <input type="text"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
        <br/>
          <input className='button' type="submit" value={this.props.formType}
          />
        <br/>
        <button onClick={this.handleDemo}>Demo</button>
      </form>
      </div>
        <div className='alternate-form'>
          {this.props.navLink}
        </div>
      </>
    );
  }
}

export default withRouter(SessionForm);
