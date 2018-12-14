import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';

class Template extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className = 'max-width-two'>
          { this.props.children }
        </div>
        <div className = 'bottom'></div>
      </Fragment>
    )
  }  
}

export default Template;
