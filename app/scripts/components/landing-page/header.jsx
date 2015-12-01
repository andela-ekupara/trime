(function(){
	'use strict';
	var React = require('react'),
		RouteHandler =require('react-router').RouteHandler,
		Link = require('react-router').Link,
		Header = React.createClass({
		  render: function() {
		    return (
						<div id="header">
						  <div id="nav">
						    <div className="mdl-grid">
						      <div className="mdl-cell mdl-cell--8-col">
						        <ul>
						          <li className="login">TRIME  </li>
						          <li className="right btn-start"><a href="#">Start Triming</a></li> 
						        </ul>
						      </div>
						    </div>
						  </div>
						</div>
	        );
		  }
	});

	module.exports = Header;
})();

