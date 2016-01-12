(function() {
  'use strict';

  var TrimeConstants = require('../constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    createOrg: function(name, description) {
      var data = {
        name: name,
        description: description
      };
      // Call the helper function, passing in the URL, data and actionType
      BaseActions.post('/api/orgs', data, TrimeConstants.ORG_CREATE);
    },

    getOrgs: function() {
      BaseActions.get('/api/orgs', TrimeConstants.ORGS_GET);
    },

    addUser: function(data) {
      BaseActions.post('/api/orgs/' + data.orgId + '/users', data, TrimeConstants.ORG_USERS);
    }
  };
})();
