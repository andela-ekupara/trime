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
    },

    login: function(username, password) {
      AppDispatcher.dispatch({
        actionType: TrimeConstants.USER_LOGIN,
        username: username,
        password: password
      });
    }
  };

  module.exports = TrimeActions;
})();
