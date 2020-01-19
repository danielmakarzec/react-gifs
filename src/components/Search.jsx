import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifName: 'Ex. Elon Musk'
    };
  }


  render() {
    return (
      <input type="text" className="form-control form-search" value={this.state.gifName} />
    );
  }
}

export default Search;
