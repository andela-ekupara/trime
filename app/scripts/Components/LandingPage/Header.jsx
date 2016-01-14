(function(){
  'use strict';
  var React = require('react'),
    LoginForm = require('../Login/LoginForm.jsx'),
    UserStore = require('../../Stores/UserStore'),
    UserActions = require('../../Actions/UserActions');

    module.exports = React.createClass({
      componentWillMount: function() {
        UserActions.session();
        UserStore.addChangeListener(this.getSession);
      },

      getSession: function () {
        var data = UserStore.getData();
        if(data && !data.error) {
          this.props.setUser(data);
        }
      },

      render: function() {
        return(
            <div id="header">
              <div id="nav">
                <div>
                  <div className="md-inline-block">
                    <a>
                      <span className="title">TRIME</span>
                    </a>
                  </div>
                  <div className="right login-form">
                  {!this.props.user.id ?
                      <LoginForm className="center-align"
                          user={this.props.user} setUser={this.props.setUser}
                  /> : null }
                  </div>
                </div>
              </div>
            </div>
          );
      }
  });
})();
