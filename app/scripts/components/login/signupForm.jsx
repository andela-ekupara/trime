(function() {
	'use strict';

	var React = require('react'),
    UserActions = require('../../actions/userActions');
  require('../../stores/userStore');

	var SignupForm = React.createClass({
    getInitialState: function() {
      return {
        user: {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: ''
        }
      }
    },
    handleFieldChange: function(event) {
      var field = event.target.name;
      var value = event.target.value
      this.state.user[field] = value;
      return this.setState({user: this.state.user});
    },
    onSubmit: function(event) {
      event.preventDefault();
      UserActions.signup(this.state.user);
    },
		render: function() {
			return (
				<div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
              	<i className="material-icons prefix">account_circle</i>
                <input name="firstName" id="first_name" type="text" className="validate" onChange={this.handleFieldChange} />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
              	<i className="material-icons prefix">account_circle</i>
                <input name="lastName" id="last_name" type="text" className="validate" onChange={this.handleFieldChange}/>
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
              	<i className="material-icons prefix">account_circle</i>
                <input name="username" id="username" type="text" className="validate" onChange={this.handleFieldChange}/>
                <label for="username">User Name</label>
              </div>
              <div className="input-field col s6">
              	<i className="material-icons prefix">email</i>
                <input name="email" id="email" type="email" className="validate" onChange={this.handleFieldChange}/>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
              	<i className="material-icons prefix">security</i>
                <input name="password" id="password" type="password" className="validate" onChange={this.handleFieldChange}/>
                <label for="password">Password</label>
              </div>
              <div className="input-field col s6">
              	<i className="material-icons prefix">security</i>
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
              <div className="col"> 
                <button className="btn waves-effect waves-light" type="submit" name="action">start trimming</button>  
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
              <h5>Welcome to Trime!</h5>
              <hr />
		          <SignupForm />
		        </div>
		      </div>	
    		</div>
			);
		}
	});

module.exports = SignupCard;
})();