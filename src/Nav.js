import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
		<nav className="navbar fixed-top navbar-light bg-light">
	    <ul className="navbar-nav abs-center-x align-middle">
	      	<li className="nav-item">
	        	<span className="nav-link">DIOGENIS PANAGIOTIS</span>
	      	</li>
	    </ul>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
		    <span className="navbar-toggler-icon"></span>
		  </button>
			<div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav mx-auto">
			      	<li className="nav-item">
			        	<a className="nav-link" target="_blank" href="mailto:diogenis.panagiotis@gmail.com">Email</a>
			      	</li>
			      	<li className="nav-item">
			        	<a className="nav-link" href="http://linkedin.com/in/DiogenisPanagiotis">LinkedIn</a>
			      	</li>
			      	<li className="nav-item">
			        	<a className="nav-link" href="http://github.com/DiogenisPanagiotis">Github</a>
			      	</li>
			    </ul>
			</div>
		</nav>
    )
  }
}

export default Nav
