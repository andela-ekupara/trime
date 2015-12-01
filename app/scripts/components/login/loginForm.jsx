'use strict';

var React = require('react');

var LoginForm = React.createClass({
	render: function() {
		return (
			<div className="row">
        <form className="col s12">
          <div className="input-field col s6">
          	<i className="material-icons prefix">account_circle</i>
            <input id="username" placeholder="email" type="text" className="validate" />
          </div>
          <div className="input-field col s6">
          	<i className="material-icons prefix">security</i>
            <input id="password" placeholder="password" type="password" className="validate" />
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

module.exports = NavBar;