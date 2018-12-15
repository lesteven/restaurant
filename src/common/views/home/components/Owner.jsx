import React, { Component } from 'react';
import style from '../css/owner.css';
import menuData from './menuData';


class Owner extends Component {
  render() {
    const img = {
      backgroundImage: 'url(/anon.jpeg)',
    }
    return (
      <div className = 'block-size owner'>
        <div className = 'img-style' style = { img }></div>
        <div className = 'center'>
          <div className = ' owner-text'>
          <h1> Anon </h1>
          { menuData.map((each, index) =>
            <p key = { index }> { each } </p> )}
          </div>
        </div>
      </div>
    )
  }
}




export default Owner;
