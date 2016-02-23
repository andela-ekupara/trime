(function() {
  'use strict';

  var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    UserActions = require('../../actions/UserActions');

  var Menu = React.createClass({
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
      window.$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240,
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true
      });
    },

    componentWillUnmount: function() {
      UserStore.removeChangeListener(this.getSession);
    },

    getSession: function() {
      var data = UserStore.getData();
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
              url: '/logout'
            }]
        });
      }
    },

    render: function() {
      var menuNodes = this.state.menu.map(function(menuItem, index) {
        return (
          <li key={index}>
            <a href={menuItem.url}>{menuItem.name}</a>
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
