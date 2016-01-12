(function() {
  'use strict';
  var React = require('react');
  var ProjectForm = require('./ProjectForm.jsx');

  var ProjectPage = React.createClass({
    render: function() {
      return (
        <div>
          <ProjectForm />
        </div>
      );
    }
  });

  module.exports = ProjectPage;
})();