(function(){
  'use strict';
  var React = require('react'),
    LoginForm = require('../Login/LoginForm.jsx'),
    UserStore = require('../../stores/UserStore'),
    UserActions = require('../../actions/UserActions'),
    Menu = require('../MenuBar/Menu.jsx');
    

    module.exports = React.createClass({
      getInitialState: function() {
        return {
          data: null
        };
      },
      componentWillMount: function() {
        UserActions.session();
        UserStore.addChangeListener(this.getSession);
      },

      getSession: function () {
        var data = UserStore.getData();
        if (data && !data.error) {
          this.setState({data: data});
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
                    <Menu data={this.state.data} />
                  </div>
                </div>
              </div>
            </div>
          );
      }
  });
})();
