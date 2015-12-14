'use strict';

var React = require('react'),
  UserActions = require('../../actions/userActions'),
	UserStore = require('../../stores/userStore'),
	Navigation = require('react-router').Navigation;

var LoginForm = React.createClass({
	mixins: [Navigation],
	
	getInitialState: function() {
		return {
			user: {
				username: '',
				password: ''
			},
			result: ''
		};
	},

	componentWillMount: function() {
		UserStore.addChangeListener(this.handleLogin);
	},

	handleLogin: function() {
		var data = UserStore.getData();
		if(data.error) {
			if(typeof data.error === 'string') {
				window.Materialize.toast(data.error, 2000, 'error-toast');	
			}
		} else {
			this.setState({result: 'successful'});
			// this.transitionTo('/orgs');
		}
	},

	handleFieldChange: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.user[field]= value;
		this.setState({user: this.state.user});
	},

	onSubmit: function(event) {
		event.preventDefault();
		UserActions.login(this.state.user);
	},

	render: function() {
		return (
			<div className="row">
        <form className="col s12 md-inline-block" onSubmit={this.onSubmit}>
          <div className="col">
            <input className="header-input validate" name="email" id="email" placeholder="email" type="text" onChange={this.handleFieldChange}/>
          </div>
          <div className="col">
            <input className="header-input validate" name="password" id="password" placeholder="password" type="password" onChange={this.handleFieldChange}/>
          </div> 
          <div className="col right"> 
          	<button className="btn waves-effect header-btn" type="submit" name="action"><i className="fa fa-sign-in"></i></button>  
          </div> 
          
        </form>
      </div>
		);
	}
});



module.exports = LoginForm;