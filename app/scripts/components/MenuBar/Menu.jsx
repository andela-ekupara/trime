(function() {
  'use strict';

  var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    UserActions = require('../../actions/UserActions');

  var Menu = React.createClass({
     mixins: [History],
    propTypes: {
      setUser: React.PropTypes.func
    },

    getInitialState: function() {
      return {
        menu: [{
            name: 'Trime',
            url: '#'
          },{
            name: 'About',
            url: '#'
          },{
            name: 'Help',
            url: '#'
          },{
            name: 'Settings',
            url: '#'
          },{
            name: 'Contact us',
            url: '#'
          }, {
            name: 'Start Triming',
            url: '/join'
          }
        ],
        user: null
      };
    },

    componentDidMount: function() {
      UserActions.session();
      UserStore.addChangeListener(this.getSession);
      UserStore.addChangeListener(this.handleLogout);
      window.$('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'right',
        closeOnClick: true
      });
    },

    componentWillUnmount: function() {
      UserStore.removeChangeListener(this.getSession);
    },

    getSession: function() {
      var data = UserStore.getSession();
      if (data && !data.error) {
        this.props.setUser(data);
        this.setState({
          user: data,
          menu: [{
              name: 'Signed in as ' + data.name,
              url: '#'
            },{
              name: 'Your Profile',
              url: '#'
            },{
              name: 'Help',
              url: '#'
            },{
              name: 'Settings',
              url: '#'
            },{
              name: 'Logout',
              url: '#'
            }]
        });
      }
    },

    handleLogout: function() {
      var data = UserStore.getLogoutResult();
      if (data) {
        if(data.error) {
          window.Materialize.toast(data.error, 2000, 'error-toast');
        } else {
          window.localStorage.removeItem('token');
          window.Materialize.toast(data.message, 2000, 'success-toast');
          this.setState({
          user: null,
           menu: [{
              name: 'Trime',
              url: '#'
            },{
              name: 'About',
              url: '#'
            },{
              name: 'Help',
              url: '#'
            },{
              name: 'Settings',
              url: '#'
            },{
              name: 'Contact us',
              url: '#'
            }, {
              name: 'Start Triming',
              url: '/join'
            }]
          });
          this.history.pushState(null, '/');
        }
      }
    },

    handleLogoutAction: function(event) {
      event.preventDefault();
      var access_token = {
        token: window.localStorage.getItem('token')
      };
      UserActions.logout(access_token);
    },

    render: function() {
      var menuNodes = this.state.menu.map((menuItem, index) => {
        return (
          <li key={index}>
            {menuItem.name == 'Logout'
            ?  <a onClick={this.handleLogoutAction} href={menuItem.url}>{menuItem.name}</a>
             :  <a href={menuItem.url}>{menuItem.name}</a>
          }
          </li>
        );
      });
      return (
        <div>
          <a className="button-collapse hide-on-large-only" data-activates="mobile-menu" href="#">
            <i className="material-icons">menu</i>
          </a>
          <a className="dropdown-button hide-on-med-and-down" data-activates="dropdown" href="#">Menu
            <i className="material-icons right">arrow_drop_down</i>
          </a>
          <ul className="dropdown-content" id="dropdown" style={{width: 300, left: 1200}}>
            {menuNodes}
          </ul>
          <ul className="side-nav" id="mobile-menu">
            {menuNodes}
          </ul>
        </div>
      );
    }
  });
  module.exports = Menu;
})();
