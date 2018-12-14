import React, { Component } from 'react';
import style from './css/home.css';
import Banner from './components/Banner';
import Menu from './components/Menu';

class HomePage extends Component {
  render() {
    return (
      <div className = 'home'>
        <Banner />
        <Menu />
      </div>
    )
  }
}




export default HomePage;
