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

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.props.formType}
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
          />
          <input type="text"
            value={this.state.password}
            onChange={this.update('password')}
          />
        <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
