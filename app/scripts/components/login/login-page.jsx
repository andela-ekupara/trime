(function() {
	'use strict';

	var React = require('react');
	var RouteHandler = require('react-router').RouteHandler;
	var LoginForm = require('./loginForm.jsx');
		
	var LoginPage = React.createClass({
			render: function() {
				return (
					<div>
						<LoginForm />
						<div className="container">
							<RouteHandler />
						</div>
					</div>
					);
			}
	});

	module.exports = LoginPage;
})();