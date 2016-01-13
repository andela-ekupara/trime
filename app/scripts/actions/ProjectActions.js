(function() {
  'use strict';

  var TrimeConstants = require('../constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    createProject: function(data) {
      // Call the helper function, passing in the URL, data and actionType
      BaseActions.post(
        '/api/orgs/' + data.orgId + '/projects',
        data,
        TrimeConstants.PROJECT_CREATE
      );
    },

    getProjects: function(orgId) {
      BaseActions.get(
        '/api/orgs/' + orgId + '/projects',
        TrimeConstants.PROJECTS_GET
      );
    },

    addUser: function(data) {
      BaseActions.post(
        '/api/orgs/' + data.orgId + '/projects/' + data.projectId + '/users',
        data,
        TrimeConstants.PROJECT_USERS_CREATE
      );
    }
  };
})();
