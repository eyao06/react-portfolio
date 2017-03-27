import React, { Component } from 'react';

import RadarChartView from '../components/body/charts/RadarChartView.js' /* displays radar charts */
import BarChartView from '../components/body/charts/BarChartView.js' /* displays bar charts */

import SkillsData from '../../assets/data/SkillsData_Example.json' /* all skills data */

/*  black color font */
var blackFont = {
    color: '#000',
};

/* skills page */
class Skills extends Component {

  	render() {
 
	    return (
	      	<div className="container-fluid" style={blackFont}>

	      		<div className="row-fluid ">
	          		<div className="col-md-12">
	            		<h1>Programming Skills</h1>
	            	</div>
	            </div> {/* end row */}

	        	{/* radar charts */}
	        	<div className="row-fluid " >
	          		<div className="col-md-12">

	          			{/* displays radar charts with the skills data */}
            			<RadarChartView data={SkillsData.programmingSkills} chart={SkillsData.threeColChart}/>

	          		</div>
	        	</div> {/* end row */}

	        	<div className="row-fluid" >
	          		<div className="col-md-12">
	          			<hr />
	            		<h1>Work/Technical Skills</h1>
	          		</div>
		        </div> {/* end row */}

		    	{/* Bar charts */}
	        	<div className="row-fluid " >

	        		{/* displays bar charts with the skills data */}
					<BarChartView data={SkillsData} />

		        </div> {/* end row */}
	      	</div> /* end container */

	    );
  	}
}

export default Skills;
