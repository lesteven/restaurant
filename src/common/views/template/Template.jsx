import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';

class Template extends Component {

  render() {
    return (
      <Fragment>
        <div className = 'max-width-two'>
          { this.props.children }
        </div>
      </Fragment>
    )
  }  
}

export default Template;
