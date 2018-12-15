import React, { Component } from 'react';
import styles from '../css/menu.css';


class Menu extends Component {
  render() {
  const imgStyle = {
    backgroundImage: 'url(/vegetables.jpeg)',
  }
    return (
      <div className = 'block-size menu'>
        <div className = 'center'>
          <h2> Organic </h2>
          <h2> Locally Sourced </h2>
          <h2> Authentic </h2>
          <h2> Sustainable </h2>
        </div>
        <div className = 'img-style' style = { imgStyle }></div>
      </div>
    )
  }
}




export default Menu;
