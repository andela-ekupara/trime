(function() {
  'use strict';

  var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    UserActions = require('../../actions/UserActions'),
    Menu = require('../MenuBar/Menu.jsx');

  module.exports = React.createClass({
    getInitialState: function() {
      return {data: null};
    },

    componentWillMount: function() {
      UserActions.session();
      UserStore.addChangeListener(this.getSession);
    },

    getSession: function() {
      var data = UserStore.getData();
      if (data && !data.error) {
        this.setState({data: data});
        this.props.setUser(data);
      }
    },

    render: function() {
      return (
        <nav className="transparent" id="header">
          <div className="nav-wrapper" id="nav">
            <a href="/" className="brand-logo">TRIME</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="/join">Login</a></li>
              <li>
                <a className="dropdown-button" href="#" data-activates="dropdown">Menu
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
                <Menu data={this.state.data}/>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  });
})();
