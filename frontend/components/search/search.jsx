import { connect } from 'react-redux';
import React from 'react';
import { updateFilter } from '../../actions/filter_actions';
import UserIndex from './user_index';

const msp = state => {
  return {
  searches: Object.values(state.entities.search),
  users: Object.values(state.entities.users)
  };
};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    return e => this.props.updateFilter(filter, e.currentTarget.value)
  }

  update() {
    return e => this.setState({query: e.currentTarget.value})
  }

  render() {
    return (
      <div>
      <form>
        <input
          placeholder="Search"
          onChange={this.handleChange('users')}
        />
      <p>{this.state.query}</p>
      </form>
      <UserIndex users={this.props.searches} />
      </div>
    )
  }

}

export default connect(msp, mdp)(Search);
