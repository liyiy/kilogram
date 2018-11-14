import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
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
          <input class='button' type="submit" value={this.props.formType}
          />
        <br/>
      </form>
      </div>
        <div className='alternate-form'>
          <a>{this.props.navLink}</a>
        </div>
      </>
    );
  }
}

export default withRouter(SessionForm);
