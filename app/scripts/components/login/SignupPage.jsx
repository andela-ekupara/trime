(function() {
	'use strict';

	var React = require('react'),
		SignupForm = require('./SignupForm.jsx');
	
	module.exports = React.createClass({
		render: function() {
			return (
				<div>
					<div className="container">
						<SignupForm />
					</div>
				</div>
			);
		}
	});
	
})();