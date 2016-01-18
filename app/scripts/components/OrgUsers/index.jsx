(function() {
  'use strict';
  var React = require('react');
  var OrgUsers = require('./OrgUsers.jsx');

  var UsersPage = React.createClass({
    render: function() {
      return (
        <div className="container">
          <OrgUsers orgId={this.props.params.orgId}/>
        </div>
      );
    }
  });

  module.exports = UsersPage;
})();
