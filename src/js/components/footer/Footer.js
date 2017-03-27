import React, { Component } from 'react';

class Footer extends Component {
  	render() {
	    return (
	      	<footer style={{background: this.props.footerColor}}>

    			<hr />

        		<div className="text-center">

        			{/* contact information */}
	            	<i className="fa fa-phone-square"></i><span>  Phone: {this.props.contact.phone}</span>
	            	<br />
	            	<i className="fa fa-envelope-square"></i><span>  Email: {this.props.contact.email}</span>
	            	<br />

	            	{/* linkedIn and gihub icon links */}
		            <a href={this.props.contact.linkedIn} style={{paddingLeft: '5px'}}><i className="fa fa-linkedin-square fa-2x"> </i></a>
		            <a href={this.props.contact.github} style={{paddingLeft: '5px'}}><i className="fa fa-github-square fa-2x"> </i></a>
		            
				</div>

				<br />

	      	</footer> /* end footer */
	    );
  	}
}

export default Footer;