import React, { Component } from 'react';
import style from './css/home.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Owner from './components/Owner';
import Footer from './components/Footer';


class HomePage extends Component {
  render() {
    return (
      <div className = 'home'>
        <Banner />
        <Menu />
        <Owner />
        <Footer />
      </div>
    )
  }
}




export default HomePage;
