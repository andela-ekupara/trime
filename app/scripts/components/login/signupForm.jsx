(function() {
	'use strict';

	var React = require('react');

	var SignupForm = React.createClass({
		render: function() {
			return (
				<div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
              	<i className="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
              	<i className="material-icons prefix">account_circle</i>
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
              	<i className="material-icons prefix">account_circle</i>
                <input id="username" type="text" className="validate" />
                <label for="username">User Name</label>
              </div>
              <div className="input-field col s6">
              	<i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
              	<i className="material-icons prefix">security</i>
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
              <div className="input-field col s6">
              	<i className="material-icons prefix">security</i>
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
            </div>
          </form>
        </div>
			);
		}
	});
	
	var SignupCard = React.createClass({
		render: function() {
			return (
				<div className="row">
		      <div className="col s12">
		        <div className="card-panel">
		          <SignupForm />
		        </div>
		      </div>	
    		</div>
			);
		}
	});

module.exports = SignupCard;
})();