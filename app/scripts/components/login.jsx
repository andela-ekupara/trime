(function() {
	var React = require('react');

	var LoginForm = React.createClass({
		handleSubmit: function(e) {
			e.preventDefault();
		},
		render: function() {
			return ( 
				<form onSubmit = {this.handleSubmit}>
				<label>email</label>
				<input type = "email" placeholder = "me@example.com" required/>
				<label> password</label>
				<input type = "password" required/>
				<input type = "submit" value = "Post"/>
				</form>
			);
		}
	});

	var SignupForm = React.createClass({
		handleSubmit: function(e) {
			e.preventDefault();
		},
		render: function() {
			return ( 
				<form onSubmit = {this.handleSubmit}>
				<label>username</label>
				<input type = "text" placeholder = "johndoe" required/>
				<label>firstname</label>
				<input type = "text" placeholder="John" required/>
				<label>lastname</label>
				<input type = "text" placeholder = "Doe" required/>
				<label>email</label>
				<input type = "email" placeholder = "johndoe@example.com" required />
				<label>password </label>
				<input type = "password" required/>
				<label>confirm password </label>
				<input type = "password" required/>
				<input type = "submit" value = "Post" />
				</form>
			);
		}
	});

	var LoginComponent = React.createClass({
		render: function() {
			return ( <LoginForm/> );
		}
	});

	var SignupComponent = React.createClass({
		render: function() {
			return ( <SignupForm /> );
		}
	});

	var TabComponent = React.createClass({
		render: function() {
			return ( 
				<div>
					<div class="login">
						<LoginForm/>
					</div>
					<div class="signup">
						<SignupForm/>
					</div>
				</div>
				);
		}
	});

var CardComponent = React.createClass({
	render : function() {
		return (
			<TabComponent/>
			);
	}
});

module.exports = CardComponent;
})();


