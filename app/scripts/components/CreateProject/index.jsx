(function() {
  'use strict';
  var React = require('react');
  var ProjectForm = require('./ProjectForm.jsx');

  var ProjectPage = React.createClass({
    render: function() {
      return (
        <div className="container">
          <ProjectForm orgId = {this.props.params.orgId}/>
        </div>
      );
    }
  });

  module.exports = ProjectPage;
})();