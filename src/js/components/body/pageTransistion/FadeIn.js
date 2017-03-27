import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../../../css/App.css';

/* fade in page transistion animation */
class FadeIn extends Component {

  render() {
  
    return (

          /* fade in page transistion animation */
          <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}
          >

            {/* target page to transistion to*/}
            {this.props.children}

        </ReactCSSTransitionGroup>

    );
  }
}

export default FadeIn;
