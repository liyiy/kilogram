import { connect } from 'react-redux';
import React from 'react';
import { updateFilter } from '../../actions/filter_actions';
import UserIndex from './user_index';
import {withRouter} from 'react-router-dom';

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
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.prepToClick = this.prepToClick.bind(this);
    this.unprepToClick = this.unprepToClick.bind(this);
    this.state = {display: "visible", indexHovered: false, location: null};
  }

  componentDidMount() {
    this.setState({location: this.props.location.pathname});
  }

  componentDidUpdate() {
    if (this.state.location !== this.props.location.pathname) {
      this.props.updateFilter("users", "");
      this.setState({location: this.props.location.pathname});
    }
  }

  handleChange(filter) {
    return e => this.props.updateFilter(filter, e.currentTarget.value)
  }

  handleBlur() {
    if (!this.state.indexHovered){

      this.setState({display: "hidden" });
    }
  }

  handleFocus() {
    this.setState({display: "visible"});
  }

  prepToClick() {
    this.setState({ indexHovered: true });
  }

  unprepToClick() {
    this.setState({ indexHovered: false })
    
  }

  // onBlur = {() => this.props.updateFilter('users', "")}

  render() {
    let search;

    if (this.props.value[0] === "" || this.props.searches.length === 0) {
      search = null;
    } else {
      search = <div className="user-index-div"
      onMouseEnter={this.prepToClick}
      onMouseLeave={this.unprepToClick}>
          <UserIndex users={this.props.searches} display={this.state["display"]} /> 
      </div>
    }

    return (
      <>
      <div className="search" onFocus={this.handleFocus}>
        <div className="search-bar">
        <form>
          <input
            placeholder="Search"
            onChange={this.handleChange('users')}
            onBlur={this.handleBlur}
          />
        </form>
        </div>
        {search}
      </div>
      </>
    )
  }

}

export default withRouter(connect(msp, mdp)(Search));
