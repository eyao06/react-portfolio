import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";

import bgColors from '../../../../assets/data/BackgroundColors.json'; /* background colors */

import "../../../../css/nav.css"; /* nav css */

/* nav font color */
var navFont = {
  color: '#fff',

};

/* nav default background color */
var navBackground = {
  background: bgColors.home

};

class Nav extends Component {

    /* changes background, nav, footer color depending on current active page */
    onClick(page) {
      if (page === 0){
        this.props.onChangeParentStyle(bgColors.home, bgColors.footer.home);
        navBackground.background=bgColors.header.home;
      }
      else if (page === 1) {
        this.props.onChangeParentStyle(bgColors.about, bgColors.footer.about);
        navBackground.background=bgColors.header.about;
      }
      else if (page === 2) {
        this.props.onChangeParentStyle(bgColors.skills, bgColors.footer.skills);
        navBackground.background=bgColors.header.skills;
      }
      else if (page === 3) {
        this.props.onChangeParentStyle(bgColors.projects, bgColors.footer.projects);
        navBackground.background=bgColors.header.projects;
      }    
    }

    render() {

    return (
      
        <nav className="navbar navbar-default navbar-fixed-top" style={navBackground}>
          <div className="container-fluid">

            {/* navbar collapse */}
            <div className="navbar-header header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
      
            <div className="collapse navbar-collapse" id="navbar-collapse" style={{textAlign: 'center'}}>
              <ul className="nav navbar-nav navbar-brand" >

                  {/* page link buttons */}
                  <IndexLink to="/"        className="nav-link dropdown btn-margin-right"   onClick={this.onClick.bind(this,0)} style={navFont}>Home</IndexLink>
                  <Link      to="about"    className="nav-link dropdown btn-margin-right"   onClick={this.onClick.bind(this,1)} style={navFont}>About</Link>
                  <Link      to="skills"   className="nav-link dropdown btn-margin-right"   onClick={this.onClick.bind(this,2)} style={navFont}>Skills</Link>
                  <Link      to="projects" className="nav-link dropdown btn-margin-right"   onClick={this.onClick.bind(this,3)} style={navFont}>Projects</Link>
                  
                  {/* download resume */}
                  <a href={this.props.data.resume} className="nav-link dropdown btn-margin-right" style={navFont} download><i className="fa fa-download" /> Resume</a>
                   
              </ul> 
            </div>
          </div> {/* end container */}
        </nav> /* end nav */
      
    );
  }
}

export default Nav;


/*
var navBackground = {
  background: bgColors.home,

};

class Nav extends Component {

    onClick(page) {
      if (page === 0){
        this.props.onChangeParentStyle(bgColors.home, bgColors.footer.home);
        navBackground.background=bgColors.header.home;
      }
      else if (page === 1) {
        this.props.onChangeParentStyle(bgColors.about, bgColors.footer.about);
        navBackground.background=bgColors.header.about;
      }
      else if (page === 2) {
        this.props.onChangeParentStyle(bgColors.skills, bgColors.footer.skills);
        navBackground.background=bgColors.header.skills;
      }
      else if (page === 3) {
        this.props.onChangeParentStyle(bgColors.projects, bgColors.footer.projects);
        navBackground.background=bgColors.header.projects;
      }    
    }
*/