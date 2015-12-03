(function() {
	'use react';

	var React = require('react');
	var Input = require('../common/textInput');

	var LoginForm = React.createClass({
		propTypes: {
			onSave: React.PropTypes.func.isRequired,
			onChange: React.PropTypes.func.isRequired,
			errors: React.PropTypes.object
		},

		render: function() {
			return (
				<form>
					<h1>Login</h1>
					<Input
						name="username"
						label="username"
						placeholder="username"
						value={this.props.username}
						onChange={this.props.onChange}
						error={this.props.error} />

					<Input
						name="password"
						label="password"
						placeholder="password"
						value={this.props.lastname}
						onChange={this.props.onChange}
						error={this.props.errors} />

					<input type="submit" value="Save" className="" onClick={this.props.onSave} />
				</form>
			);
		}
	});

	module.exports = LoginForm;
})();