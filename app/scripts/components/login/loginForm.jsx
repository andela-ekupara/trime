'use strict';

var React = require('react');
var trimeActions = require('../../actions/trimeActions');

var LoginForm = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			password: ''
		}
	},
	handleUsernameChange: function(event) {
		return this.setState({
			username: this.state.username
		});
	},
	handlePasswordChange: function(event) {
		return this.setState({
			password: this.state.password
		});
	},
	onSubmit: function(event) {
		event.preventDefault();
		console.log("THIS "+this.state.username);
		trimeActions.login("shekini", "abc123");
	},
	render: function() {
		return (
			<div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="input-field col s6">
          	<i className="material-icons prefix">account_circle</i>
            <input id="username" placeholder="email" type="text" className="validate" onChange={this.handleUsernameChange}/>
          </div>
          <div className="input-field col s6">
          	<i className="material-icons prefix">security</i>
            <input id="password" placeholder="password" type="password" className="validate" onChange={this.handlePasswordChange}/>
          </div>  
          <button class="btn waves-effect waves-light" type="submit" name="action">Login
    				<i class="material-icons right">send</i>
  				</button>       
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
			    <div className="mdl-grid">
			      <div className="mdl-cell mdl-cell--8-col">
			        <ul>
			          <li className="login">TRIME  </li>
			          <div>
			          	<LoginForm />
			          </div>
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});

module.exports = LoginForm;