(function() {
  'use strict';
  var React = require('react');
  var ProjectUsers = require('./ProjectUsers.jsx');

  var UsersPage = React.createClass({
    render: function() {
      return (
        <div className="container">
          <ProjectUsers orgId={this.props.params.orgId} projectId={this.props.params.projectId}/>
        </div>
      );
    }
  });

  module.exports = UsersPage;
})();
