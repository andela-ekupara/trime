(function() {
  'use strict';
  var React = require('react');
  var ProjectStore = require('../../stores/ProjectStore');
  var ProjectActions = require('../../actions/ProjectActions');
  var ProjectList = require('./ProjectList.jsx');
  var OrgProjects = React.createClass({
    getInitialState: function() {
      return {
        projects: []
      };
    },

    componentDidMount: function() {
      ProjectActions.getProjects(this.props.params.orgId);
      ProjectStore.addChangeListener(this.populateProjects);
    },

    populateProjects: function() {
      var data = ProjectStore.getProjects();
        this.setState({projects: data});
    },

    render: function() {
      return (
          <div className="container">
            <div className="row">
              <div className="col s12">{}</div>
              <div className="col s12 m4"><h6>PROJECTS</h6></div>
              <div className="col s12 m4"><a href=""><h6>Show all</h6></a></div>
              <div className="col s12 m4"><a className="waves-effect waves-light btn"><i className="material-icons right">send</i>create project</a></div>
            </div>
            <div className = "row">
              <ProjectList projects={this.state.projects}/>
            </div>
          </div>
      );
    }
  });
  module.exports = OrgProjects;
})();
