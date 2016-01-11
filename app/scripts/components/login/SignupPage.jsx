(function() {
  'use strict';

  var React = require('react'),
    UserActions = require('../../actions/userActions'),
    UserStore = require('../../stores/userStore'),
    Navigation = require('react-router').Navigation,
    SignupForm = require('./SignupForm.jsx');

  module.exports = React.createClass({
    mixins: [Navigation],

    componentWillMount: function() {
        UserActions.session();
        UserStore.addChangeListener(this.getSession);
    },

    getSession: function () {
        var data = UserStore.getData();
        if(data && !data.error) {
        // session exists
          this.transitionTo('/orgs');
        }
    },
    render: function() {
      return (
        <div location="my location">
          <div className="container">
            <SignupForm />
          </div>
        </div>
      );
    }
  });

})();
