import React, { Component } from 'react';
import Search from './Search';
import Gif from './Gif';

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
        <div className="left">
          <Search />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right">
          <div className="gif-list"></div>
        </div>
      </div>
    );
  }
}

export default App;
