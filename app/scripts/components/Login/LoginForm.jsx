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
      UserStore.addChangeListener(this.handleLogin);
    },

    handleLogin: function() {
      var data = UserStore.getData();
      if(data.error) {
        if(typeof data.error === 'string') {
          window.Materialize.toast(data.error, 2000, 'error-toast');
        }
      } else {
        this.setState({result: 'successful'});
        // this.history.pushState(null, '/dashboard');
      }
    },

    handleFieldChange: function(event) {
      var field = event.target.name;
      var value = event.target.value;
      this.state.user[field] = value;
      this.setState({user: this.state.user});
    },

    handleSubmit: function(event) {
      event.preventDefault();
      UserActions.login(this.state.user);
    },

    render: function() {
      return (
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <i className="material-icons prefix">mail_outline</i>
              <input className="validate" 
                  id="email"
                  name="email"
                  onChange={this.handleFieldChange}
                  required
                  type="text"
              />
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">password</label>
            </div>
            <div className="col s2">
              <button className="btn waves-effect header-btn" 
                  name="action"
                  type="submit" 
              >
                <i className="fa fa-sign-in"></i>
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
