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
    }
  };
})();
