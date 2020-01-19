import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'search',
      num: 1,
    };
  }

  handleClick = () => {
    this.setState({num: this.state.num + 1});
    console.log(`clicked: ${this.state.num}`);
  }

  render() {
    const { name } = this.state;
    return (
      <div onClick={this.handleClick}>
        { name }
        _component
      </div>
    );
  }
}

export default Search;
