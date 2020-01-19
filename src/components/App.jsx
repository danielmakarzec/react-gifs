import React, { Component } from 'react';
import Search from './Search';
import Gif from './Gif';
import GifList from './Gif-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'JNn14pu8SXPeP16uzF'
    };
  }

  render() {
    return (
      <div>
        <div className="left">
          <Search />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
