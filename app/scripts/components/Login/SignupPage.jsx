(function() {
  'use strict';

  var React = require('react'),
    UserActions = require('../../actions/UserActions'),
    UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    LoginForm = require('./LoginForm.jsx'),
    SignupForm = require('./SignupForm.jsx');

  module.exports = React.createClass({
    mixins: [History],

    componentWillMount: function() {
        UserActions.session();
        UserStore.addChangeListener(this.getSession);
    },

    getSession: function () {
        var data = UserStore.getData();
        if(data && !data.error) {
        // // session exists
          this.history.pushState(null, '/dashboard');
        }
    },
    render: function() {
      return (
          <div className="card-panel signupcard col s6">
            <div className="col s8">
              <ul className="tabs">
                <li className="tab col s4">
                  <a className="active" href="#login">login</a>
                </li>
                <li className="tab col s4">
                  <a className="active" href="#signup">signup</a>
                </li>
              </ul>
            </div>
            <div id="login">
              <LoginForm />
            </div>
            <div id="signup">
              <SignupForm />
            </div>
          </div>
        
      );
    }
  });

})();
