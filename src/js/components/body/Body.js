import React, { Component } from 'react';

import FadeIn from "./pageTransistion/FadeIn.js"

import '../../../css/App.css';

class Body extends Component {

  render() {
  
    return (

        <div className={this.props.layout}>
          <FadeIn>

            {this.props.children}

        </FadeIn>
      </div>
    );
  }
}

export default Body;
