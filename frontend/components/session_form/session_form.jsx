import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.errors = this.props.errors;
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

  updateErrors() {
    if (this.errors.length < 1) {
      this.errors = this.props.errors;
    } else {
      this.errors = [];
    }
  }

  update(field) {
    return (e) =>
    this.setState({[field]: e.target.value})
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.errors.map((error, i) => (
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
        <button className="demo-btn" onClick={this.handleDemo}>Demo Log In</button>
        <br/>
        {this.updateErrors()}
        {this.renderErrors()}
      </form>
      </div>
        <div className='alternate-form'>
          {this.props.navLink}
        </div>
        <div className="session-img">
        <img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"/>
        </div>
        <div className="phone-slideshow">
          <img id="one" src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"/>
          <img id="two" src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"/>
          <img id="three" src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"/>
        </div>
      </>
    );
  }
}

export default withRouter(SessionForm);
