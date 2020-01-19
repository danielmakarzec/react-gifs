import React, { Component } from 'react';
import giphy from 'giphy-api';
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

    this.search('elon musk');
  }

  search = (query) => {
    const API_KEY = 'C0rxGLhz59FUQPvTwiJNswuAMd3QbsdD';
    giphy(API_KEY).search({
      q: query,
      rating: 'g'},
        (error, result) => {
          this.setState({gifs: result.data});
      });
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
