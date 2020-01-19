import React, { Component } from 'react';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  render() {
    return (
      <div>
        <h1>
          <Search />
        </h1>
      </div>
    );
  }
}

export default App;
