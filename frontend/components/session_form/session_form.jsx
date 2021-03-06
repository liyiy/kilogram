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

  componentWillUnmount() {
    this.props.removeErrors();
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
      <ul className="errors">
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
      <div className="login-form-container">
        <div className="session-img-div">
          <div className="session-img">
            <img src={window.img}/>
          </div>
        </div>
        <div className="login-form-box-div">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Kilogram</h2>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br/>
            <input className='button' type="submit" value={this.props.formType}
            />
            <br/>
            <div className="sfl1"></div><div className="or">OR</div><div className="sfl2"></div>
            <br/>
            <button className="demo-btn" onClick={this.handleDemo}>Demo Log In</button>
            <br/>
            {this.renderErrors()}
          </form>
          <div className='alternate-form'>
            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
