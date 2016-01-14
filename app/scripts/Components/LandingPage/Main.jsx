(function() {
  'use strict';

  var React = require('react'),
    Header = require('./Header.jsx');

    module.exports = React.createClass({
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
            <Header setUser={this.setUser} user={this.state.user} />
            <div className="handler">
              {this.props.children}
            </div>
          </div>
        );
      }
    });
})();
