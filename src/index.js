import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './js/App';
import Home from './js/pages/Home.js';
import About from './js/pages/About.js';
import Skills from './js/pages/Skills.js';
import Projects from './js/pages/Projects.js';

const root = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" components={About}/>
			<Route path="skills" components={Skills}/>
			<Route path="projects" components={Projects}/>
		</Route>
	</Router>, 
root);
