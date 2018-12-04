import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.update = this.update.bind(this);
  }

  update() {
    return e => this.setState({query: e.currentTarget.value})
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search"
          onChange={this.update}
        />
      <p>{this.state.query}</p>
      </form>
    )
  }

}

export default Search
