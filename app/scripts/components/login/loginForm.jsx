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
		}
	},
	componentDidMount: function() {
		UserStore.addChangeListener(this.handleLogin);
	},
	handleLogin: function() {
		var data = UserStore.getData();
		if(data.error) {
			this.setState({result: data.error});
		} else {
			this.setState({result: 'successful'});
			this.transitionTo('/orgs');
		}
	},
	handleFieldChange: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.user[field]= value;
		return this.setState({user: this.state.user});
	},
	onSubmit: function(event) {
		event.preventDefault();
		console.log(this.state.user);
		UserActions.login(this.state.user);
	},
	render: function() {
		return (
			<div className="row login-form">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="input-field col s4">
            <input name="username" id="username" placeholder="email" type="text" className="validate" onChange={this.handleFieldChange}/>
          </div>
          <div className="input-field col s4">
            <input name="password" id="password" placeholder="password" type="password" className="validate" onChange={this.handleFieldChange}/>
          </div> 
          <div className="col s3"> 
          <button className="btn waves-effect waves-light" type="submit" name="action">sign in</button>  
          </div> 
          <span>{this.state.result}</span>
        </form>
      </div>
		);
	}
});

var NavBar = React.createClass({
	render: function() {
		return (
			<div id="header">
			  <div id="nav">
			    <div className="row">
			      <div className="col s12">
			        <ul>
			          <li className="logo">TRIME  </li>
			          <div className="row login">
			          	<LoginForm className="center-align"/>
			          </div>
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});

module.exports = NavBar;