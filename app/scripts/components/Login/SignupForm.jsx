(function() {
  'use strict';

  var React = require('react'),
    UserActions = require('../../actions/UserActions'),
    UserStore = require('../../stores/UserStore'),
    History = require('react-router').History;

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
        window.Materialize.toast('passwords should be > 6 characters ', 2000, 'error-toast');
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
        this.state.confirmpswd = value;
      } else {
        this.state.user[field] = value;
      }
      return this.setState({user: this.state.user, confirmpswd: this.state.confirmpswd});
    },

    onSubmit: function(event) {
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
          <form className="col s12" onSubmit={this.onSubmit}>
            <span>{this.state.result}</span>
             <div className="input-field col s12">
              <input name="name" id="name" type="text" className="validate" placeholder="Jane Doe" onChange={this.handleFieldChange} required/>
              <label for="name">Full Name</label>
            </div>
            <div className="input-field col s12">
              <input name="email" id="email" type="email" className="validate" onChange={this.handleFieldChange} required/>
              <label for="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input name="password" id="password" type="password" className="validate" onChange={this.handleFieldChange} required/>
              <label for="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input name="confirmpswd" id="password" type="password" className="validate" onChange={this.handleFieldChange} required/>
              <label for="password">Confirm Password</label>
            </div>
            <div className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">start trimming</button>
            </div>
          </form>
          <p>or</p>
          <div className="row">
            <a href="/auth/github" className="waves-effect waves-light btn">
              <i className="fa fa-github"></i>
              GitHub</a>&nbsp;
            <a href="/auth/google" className="waves-effect waves-light btn">
              <i className="fa fa-google"></i>
              Google</a>
          </div>
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
              <hr/>
              <SignupForm/>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = SignupCard;
})();