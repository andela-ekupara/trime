(function() {
  'use strict';

  var TrimeConstants = require('../constants/TrimeConstants');
  var baseActions = require('./BaseActions');

  var TrimeActions = {
    createOrg: function(name, description) {
      var data = {
        name: name,
        description: description
      };
      // Call the helper function, passing in the URL, data and actionType
      baseActions('/api/orgs', data, TrimeConstants.ORG_CREATE);
    }
  };

  module.exports = TrimeActions;
})();
