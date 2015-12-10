(function() {
	'use strict';

	var React = require('react'),
    UserActions = require('../../actions/userActions'),
    UserStore = require('../../stores/userStore'),
    Navigation = require('react-router').Navigation,
    Link = require('react-router').Link;

	var SignupForm = React.createClass({
    mixins: [Navigation],

    getInitialState: function() {
      return {
        user: {
          email: '',
          password: ''
        },
        result: ''
      };
    },

    componentDidMount: function() {
      UserStore.addChangeListener(this.handleSignup);
    },

    handleSignup: function() {
      var data = UserStore.getData();
      console.log('this  executed');
      if(data.error) {
        this.setState({result: data.error.message});
      } else {
        this.setState({result: 'Success!'});
        // this.transitionTo('/dashboard');
      }
    },

    handleFieldChange: function(event) {
      var field = event.target.name;
      var value = event.target.value;
      this.state.user[field] = value;
      return this.setState({user: this.state.user});
    },

    onSubmit: function(event) {
      event.preventDefault();
      UserActions.signup(this.state.user);
    },

    handleGithubLogin: function(event) {
      event.preventDefault();
      UserActions.githubLogin();
    },

    handleGoogleLogin: function(event) {
      event.preventDefault();
      UserActions.googleLogin();
    },

		render: function() {
			return (
				<div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
          <span>{this.state.result}</span>
            <div className="input-field col s12">
            <i class="fa fa-unlock prefix"></i>
              <input name="email" id="email" type="email" className="validate" onChange={this.handleFieldChange} required/>
              <label for="email">Email</label>
            </div>
            <div className="input-field col s12">
            	<i class="fa fa-unlock prefix"></i>
              <input name="password" id="password" type="password" className="validate" onChange={this.handleFieldChange} required/>
              <label for="password">Password</label>
            </div>
            <div className="input-field col s12">
            	<i class="fa fa-unlock prefix"></i>
              <input id="password" type="password" className="validate" required/>
              <label for="password">Password</label>
            </div>
            <div className="col s12"> 
              <button className="btn waves-effect waves-light" type="submit" name="action">start trimming</button>  
            </div>
          </form>
          <p>or</p>
          <div className="row">
            <a href="/auth/github" className="waves-effect waves-light btn"><i className="fa fa-github"></i> GitHub</a>&nbsp;
            <a href="/auth/google" className="waves-effect waves-light btn"><i className="fa fa-google"></i> Google</a> </div>
        </div>
			);
		}
	});
	
	var SignupCard = React.createClass({
		render: function() {
			return (
				<div className="row">
		      <div className="col s12">
		        <div className="card-panel signupcard">
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