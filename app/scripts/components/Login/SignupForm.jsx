(function() {
  'use strict';

  var React = require('react'),
    UserActions = require('../../actions/UserActions'),
    UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    AuthBtn = require('./AuthBtn.jsx');

  var SignupForm = React.createClass({
    mixins: [History],

    getInitialState: function() {
      return {
        user: {
          email: '',
          password: '',
          name: ''
        },
        result: '',
        confirmpswd: ''
      };
    },

    componentDidMount: function() {
      this.comparepswd();
      UserStore.addChangeListener(this.handleSignup);
    },

    comparepswd: function(password, confirmPassword) {
      if (password !== confirmPassword) {
        window.Materialize.toast('passwords don\'t match', 2000, 'error-toast');
        return false;
      } else if (password.length >= 1 && password.length < 6) {
        window.Materialize.toast('passwords should be > 6 characters ',
         2000, 'error-toast');
        return false;
      } else {
        return true;
      }
    },

    handleSignup: function() {
      var data = UserStore.getData();
      if (data.error) {
        window.Materialize.toast(data.error.message, 2000, 'error-toast');
        this.setState({result: data.error.message});
      } else {
        this.setState({result: 'Success!'});
        // this.history.pushState(null, '/dashboard');
      }
    },

    handleFieldChange: function(event) {
      var field = event.target.name;
      var value = event.target.value;
      if (field === 'confirmpswd') {
        this.setState({confirmpswd: value});
        // this.state.confirmpswd = value;
      } else {
        this.state.user[field] = value;
      }
      return this.setState({
        user: this.state.user, 
        confirmpswd: this.state.confirmpswd 
      });
    },

    handleSubmit: function(event) {
      event.preventDefault();
      if (this.comparepswd(this.state.user.password, this.state.confirmpswd)) {
        UserActions.signup(this.state.user);
      }
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
          <form className="col s12" onSubmit={this.handleSubmit}>
            <span>{this.state.result}</span>
             <div className="input-field col s12">
              <input className="validate"
                  id="name" 
                  name="name"
                  onChange={this.handleFieldChange}
                  required
                  type="text"
              />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="input-field col s12">
              <input className="validate"
                  id="email" 
                  name="email" 
                  onChange={this.handleFieldChange} 
                  required
                  type="email"  
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input className="validate"
                  id="password" 
                  name="password" 
                  onChange={this.handleFieldChange} 
                  required
                  type="password" 
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input className="validate" 
                  id="password" 
                  name="confirmpswd" 
                  onChange={this.handleFieldChange} 
                  required
                  type="password" 
              />
              <label htmlFor="password">Confirm Password</label>
            </div>
            <div className="col s12">
              <button className="btn waves-effect waves-light" 
                  name="action"
                  type="submit" 
              >start trimming</button>
            </div>
          </form>
          <AuthBtn />
        </div>
      );
    }
  });

  module.exports = SignupForm;
})();
