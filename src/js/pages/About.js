import React, { Component } from 'react';

import Data from '../../assets/data/PersonalData_Example.json'  /* all personal data */

import '../../css/App.css';

class About extends Component {
  render() {

    return (
      <div className="container-fluid">

      	{/* page title */}
        <div>
            <h1>About Me</h1>
        </div>

    	{/* output about me data from PersonalData.json */}
        <div className="card shadow" style={{color: '#000'}}>
        	{/* allows the HTML tags in the json file to render */}
          	<div dangerouslySetInnerHTML={ { __html: Data.about } }></div>
        </div>

      </div>  /* end container */
    );
  }
}

export default About;
