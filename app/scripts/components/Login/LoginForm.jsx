(function() {
  'use strict';

  var React = require('react'),
    UserActions = require('../../actions/UserActions'),
    UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    AuthBtn = require('./AuthBtn.jsx');

  var LoginForm = React.createClass({
    mixins: [History],

    getInitialState: function() {
      return {
        user: {
          username: '',
          password: ''
        },
        result: ''
      };
    },

    componentDidMount: function() {
      UserStore.addChangeListener(this.handleLogin, 'login');
    },

    handleLogin: function() {
      var data = UserStore.getLoginResult();
      if (data) {
        if(data.error) {
          if(typeof data.error === 'string') {
            window.Materialize.toast(data.error, 2000, 'error-toast');
          }
        } else {
          window.localStorage.setItem('token', data.user.token);
          UserActions.session();
          this.setState({result: 'successful'});
          this.history.pushState(null, '/dashboard');
        }
      }
    },

    handleFieldChange: function(event) {
      var field = event.target.name;
      var value = event.target.value;
      this.state.user[field] = value;
      this.setState({user: this.state.user});
    },

    handleLoginAction: function(event) {
      event.preventDefault();
      UserActions.login(this.state.user);
    },

    render: function() {
      return (
        <div className="row">
          <form action="post" className="col s12" name="loginForm" onSubmit={this.handleLoginAction}>
            <div className="input-field col s12">
              <i className="material-icons prefix">mail_outline</i>
              <input className="validate"
                  id="email"
                  name="email"
                  onChange={this.handleFieldChange}
                  required
                  type="text"
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">lock_open</i>
              <input className="validate"
                  id="password"
                  name="password"
                  onChange={this.handleFieldChange}
                  required
                  type="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="col s12">
              <button className="btn waves-effect"
                  name="action"
                  type="submit"
              >Login
                <i className="fa fa-sign-in right"></i>
              </button>
            </div>

          </form>
           <AuthBtn />
        </div>
      );
    }
  });

  module.exports = LoginForm;
})();
