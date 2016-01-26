(function(){
var React = require('react'),
  UserActions = require('../../actions/UserActions'),
  UserStore = require('../../Stores/UserStore');

var Menu = React.createClass({
    propTypes: {
        data: React.PropTypes.string
    },

   getInitialState: function() {
    return {
     one: 'Trime',
     two: 'About',
     three: 'Help',
     four: 'Contact us',
     five: 'Signup/Login',
     link2: '#!',
     link3: '#!',
     link4 : '#!',
     link5: '/join'
    };
  },

  componentWillMount: function() {
   UserActions.session();
   UserStore.addChangeListener(this.getSession);
  },

  getSession: function() {
    var data = UserStore.getData();
     if (data && !data.error) {
        this.setState({
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

      <a className="dropdown-button" href="#" data-activates="dropdown1">Menu
        <i className="fa fa-sort-desc fa-2x right"></i>
      </a>
      <ul id="dropdown1" className="dropdown-content">
         <li><a>{this.state.one}</a></li>
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
