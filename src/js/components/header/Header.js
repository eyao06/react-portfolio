import React, { Component } from 'react';

import Nav from './nav/Nav.js' /* nav bar */

class Header extends Component {

  render() {

    return (

      <header>

      	{/* nav bar */}
        <Nav data={this.props.data} onChangeParentStyle={this.props.onChangeParentStyle.bind(this)} />

      </header> /* end header */

    );
  }
}

export default Header;
