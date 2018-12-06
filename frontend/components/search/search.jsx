import { connect } from 'react-redux';
import React from 'react';
import { updateFilter } from '../../actions/filter_actions';
import UserIndex from './user_index';

const msp = state => {
  return {
  searches: Object.values(state.entities.search),
  users: Object.values(state.entities.users),
  value: Object.values(state.ui.filters)
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    return e => this.props.updateFilter(filter, e.currentTarget.value)
  }

  render() {
    let search;
    if (this.props.value[0] === "" || this.props.searches.length === 0) {
      search = null;
    } else {
      search = <UserIndex users={this.props.searches} />
    }
    return (
      <>
      <div className="search">
      <div className="search-bar">
      <form>
        <input
          placeholder="Search"
          onChange={this.handleChange('users')}
        />
      </form>
      </div>
        {search}
      </div>
      </>
    )
  }

}

export default connect(msp, mdp)(Search);
