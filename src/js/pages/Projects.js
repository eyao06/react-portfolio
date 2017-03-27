import React, { Component } from 'react';

import Project from '../components/body/card/ProjectView.js' /* displayes project */

import data from '../../assets/data/ProjectData_Example.js' /* all project data */

class Projects extends Component {

    render() {

        return (
            <div className="container-fluid">

                {/* Project page title */}
                <div>
                    <h1>Projects</h1>
                </div>

                {/* display all projects in reverse order */}
                {data.slice(0).reverse().map((item) =>
          
                    <Project key={item.id} project={item}/>

                )}    

              </div> /* end container */
        );
    }
}



export default Projects;
