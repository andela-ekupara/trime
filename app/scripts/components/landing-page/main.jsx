(function() {
  'use strict';

  var React = require('react'),
    Header = require('./Header.jsx');

    module.exports = React.createClass({
      propTypes: {
        children: React.PropTypes.element.isRequired
      }, 
      getInitialState: function() {
        return {
          user: {}
        };
      },

      setUser: function(user) {
        if(user) {
          this.setState({
            user: user
          });
        }
      },

      render: function() {
        return (
          <div>
            <Header 
                setUser={this.setUser} 
                user={this.state.user} 
            />
            <div className="handler content-area">
              {this.props.children}
            </div>
          </div>
        );
      }
    });
})();
