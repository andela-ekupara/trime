(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    TrimeConstants = require('../constants/trimeConstants');

  var TrimeActions = {
    createOrg: function(name, description) {
      AppDispatcher.dispatch({
        actionType: TrimeConstants.ORG_CREATE,
        name: name,
        description: description
      });
    }
  };

  module.exports = TrimeActions;
})();
