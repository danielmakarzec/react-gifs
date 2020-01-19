import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = 'https://media.giphy.com/media/JNn14pu8SXPeP16uzF/giphy.gif';
    return (
      <img src={src} alt=""/>
    );
  }
}

export default Gif;
