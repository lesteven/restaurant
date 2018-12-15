import React, { Component } from 'react';
import styles from '../css/footer.css';
import footerData from './footerData';

class Footer extends Component {
  map = data => { 
    return (
      data.map((each, index) => <p key = { index }> { each } </p> ) 
    )
  }
  render() {
    return (
      <div className = 'footer'>
        <div>
          <h2> Location </h2>
          { this.map(footerData[0])}
        </div>
        <div>
          <h2> Hours </h2>
          { this.map(footerData[1])}
        </div>
      </div>
    )
  }
}




export default Footer;
