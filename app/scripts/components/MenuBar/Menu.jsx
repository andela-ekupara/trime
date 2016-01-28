(function(){
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
         user: null,
         one: 'Trime',
         two: 'About',
         three: 'Help',
         four: 'Contact us',
         five: 'Start Triming',
         link1: '#',
         link2: '#',
         link3: '#',
         link4 : '#',
         link5: '/join'
        };
      },

      componentDidMount: function() {
        UserActions.session();
        UserStore.addChangeListener(this.getSession);
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
              one: 'Signed in as '+ data.name,
              two: 'Your Profile',
              three: 'Help',
              four: 'Settings',
              five: 'Logout',
              link2: '/profile',
              link5: '/logout'
          });
      }
    },

    render: function() {
      return (
        <div>
          <a className="button-collapse hide-on-large-only" data-activates="mobile-menu" href="#">
            <i className="material-icons">menu</i>
          </a>
          <a className="dropdown-button hide-on-med-and-down" data-activates="dropdown" href="#">Menu
            <i className="material-icons right">arrow_drop_down</i>
          </a>
          <ul className="dropdown-content" id="dropdown">
             <li><a href={this.state.link1}>{this.state.one}</a></li>
             <li className="divider"></li>
             <li><a href={this.state.link2}>{this.state.two}</a></li>
             <li><a href={this.state.link3}>{this.state.three}</a></li>
             <li><a href={this.state.link4}>{this.state.four}</a></li>
             <li className="divider"></li>
             <li><a href={this.state.link5}>{this.state.five}</a></li>
          </ul>
          <ul className="side-nav" id="mobile-menu">
             <li><a href={this.state.link1}>{this.state.one}</a></li>
             <li className="divider"></li>
             <li><a href={this.state.link2}>{this.state.two}</a></li>
             <li><a href={this.state.link3}>{this.state.three}</a></li>
             <li><a href={this.state.link4}>{this.state.four}</a></li>
             <li className="divider"></li>
             <li><a href={this.state.link5}>{this.state.five}</a></li>
          </ul>
        </div>
      );
    }

  });

  module.exports = Menu;

})();
