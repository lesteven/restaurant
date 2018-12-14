import React, { Component } from 'react';
import styles from '../css/banner.css';

class Banner extends Component {
  render() {
  const style = {
    backgroundImage: 'url(/burger.jpeg)',
  }
    return (
      <div className = 'banner'>
        <div className = 'img-style block-size center' style = { style }>
          <h1> ANONYMOUS </h1> 
        </div>
      </div>
    )
  }
}




export default Banner;
