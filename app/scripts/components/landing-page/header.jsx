(function(){
	'use strict';
	var React = require('react'),
		RouteHandler =require('react-router').RouteHandler,
		LoginForm = require('../login/loginForm.jsx'),

		Header = React.createClass({
		  render: function() {
		    return(
						<div id="header">
						  <div id="nav">
						    <div className="row">
						      <div className="col s1">
						        <ul>
						          <li className="login">TRIME</li>
						        </ul>
						      </div>

						      <div className="row col right">
						      { !this.props.user.id ? 
						      		<LoginForm 
						      			user={this.props.user}  
						      			className="center-align" /> : null }
		          		</div>
						    </div>
						  </div>
						</div>
	        );
		  }
	});

	module.exports = Header;
})();

