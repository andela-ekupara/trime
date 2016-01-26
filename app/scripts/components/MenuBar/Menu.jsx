(function(){
var React = require('react');

var Menu = React.createClass({
    propTypes: {
        data: React.PropTypes.object
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

  componentWillReceiveProps: function(props) {
    var data = props.data;
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
      <ul id="dropdown" className="dropdown-content">
         <li><a>{this.state.one}</a></li>
         <li className="divider"></li>
         <li><a href={this.state.link2}>{this.state.two}</a></li>
         <li><a href={this.state.link3}>{this.state.three}</a></li>
         <li><a href={this.state.link4}>{this.state.four}</a></li>
         <li className="divider"></li>
         <li><a href={this.state.link5}>{this.state.five}</a></li>
      </ul>
    );
  }
});

module.exports = Menu;

})();
