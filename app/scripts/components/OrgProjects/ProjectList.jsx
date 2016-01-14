(function() {
  'use strict';
  var React = require('react');
  var ProjectList = React.createClass({
    render: function() {
      var renderProject = function(project) {
        return (
          <div className="col s12 m4" key={project.id}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{project.name}</span>
                <p>{project.description}</p>
              </div>
              <div className="card-action">
                <a href={'/orgs/' + this.props.orgId +'/projects/' + project.id}>Go to Project</a>
                <a href={'/orgs/' + this.props.orgId + '/projects/' + project.id + '/users'}>Manage users</a>
              </div>
            </div>
          </div>
        );
      };
      return (
        <div>{this.props.projects.slice(0, 3).map(renderProject, this)}</div>
      );
    }
  });
  module.exports = ProjectList;
})();
