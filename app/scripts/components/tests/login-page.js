(function() {
	'use strict';
	var React = require('react');
	var LoginForm = require('../common/textInput')

	var LoginPage = React.createClass({
		getInitialState: function() {
			return {
				user: {
					username: '',
					password: ''
				},
				errors: {}
			}
		},

		setUserState: function(event) {
			var field = event.target.name;
			var value = event.target.value;
			this.state.author[field] = value;
			console.log(this.state.user);
			return this.setState({user: this.state.user});
		},

		loginFormIsValid: function() {
			var formIsValid = true;
			// var this.state.errors = {};

			if(this.state.user.username.length < 3) {
				this.state.errors.username = 'username invalid';
				formIsValid = false;
			}

			if(this.state.user.password.length < 3) {
				this.state.errors.password = 'password must not be empty';
				formIsValid = false;
			}

			this.setState({errors: this.state.errors});
			return formIsValid;
		},

		saveUser: function(event) {
			event.preventDefault();

			if(!this.loginFormIsValid()) {
				return;
			}
			// trimeActions.login(this.state.user.username, this.state.user.password);
		},
		render: function() {
			return (
				<div>
					<LoginForm 
						user={this.state.user}
						onChange={this.setUserState}
						onSave={this.saveUser}
						errors={this.state.errors} />
				</div>
			);
		}
	});

module.exports = LoginPage;
})();