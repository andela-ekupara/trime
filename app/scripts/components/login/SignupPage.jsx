(function() {
  'use strict';

  var React = require('react'),
    UserActions = require('../../actions/userActions'),
    UserStore = require('../../stores/userStore'),
    History = require('react-router').History,
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
        //   this.history.pushState(null, '/dashboard');
        }
    },
    render: function() {
      return (
        <div>
          <div className="container">
            <SignupForm />
          </div>
        </div>
      );
    }
  });

})();
