(function() {
  'use strict';

  var TrimeConstants = require('../constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    createProject: function(name, description) {
      var data = {
        name: name,
        description: description
      };
      // Call the helper function, passing in the URL, data and actionType
      BaseActions.post('/api/orgs/:org_id/projects', data, TrimeConstants.PROJECT_CREATE);
    },

    getProjects: function(orgId) {
      BaseActions.get('/api/orgs/' + orgId + '/projects', TrimeConstants.PROJECTS_GET);
    }
  };
})();
