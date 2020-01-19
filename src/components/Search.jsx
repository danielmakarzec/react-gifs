import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'search' };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        { name }
        _component
      </div>
    );
  }
}

export default Search;
