import React, { Component } from 'react';

class Search extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
    return e.target.value;
  };

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        // value={this.handleUpdate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;
