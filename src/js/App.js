import React, { Component } from 'react';

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Body from "./components/body/Body.js";

import personalData from '../assets/data/PersonalData_Example.json'; /* all personal data */
import bgColors from '../assets/data/BackgroundColors.json'; /* background colors */

import '../css/App.css';

class App extends Component {


	constructor(props, context) {
	    super(props, context);

	    /* default background and footer color */
	    this.state = {backgroundColor: bgColors.home, footerColor: bgColors.footer.home}; 
	}

	/* changes background and footer color based on current page  */
	onChangeStyle(backgroundColor, footerColor) {
	    this.setState({backgroundColor: backgroundColor, footerColor: footerColor})
	}

	render() {

	    return (
			/* wrapper */
	      	<div id="fullscreen" className="container-fluid wrapper" style={{backgroundColor: this.state.backgroundColor}} > 
				
				{/* header and nav bar */}
	        	<Header className="header" data={personalData} onChangeParentStyle={this.onChangeStyle.bind(this)}/> 
				
				{/* body and pages*/}
		        <Body className="shadow" layout={"content shadow"}> 								
		            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
		        </Body>

		        {/* footer */}
	        	<Footer className="footer" contact={personalData} footerColor={this.state.footerColor}/>

	      	</ div> /* end wrapper */
	    );
  	}
}

export default App;

