(function(){
	'use strict';
	var React = require('react'),
		RouteHandler =require('react-router').RouteHandler,
		Link = require('react-router').Link,
		Header = React.createClass({
		  render: function() {
		    return(
						<div id="header">
						  <div id="nav">
						    <div className="row">
						      <div className="col s1">
						        <ul>
						          <li className="login">TRIME  </li>
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

