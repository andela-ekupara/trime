(function() {
  'use strict';
  var TrimeConstants = require('../constants/trimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    login: function(user) {
      BaseActions.post('/api/users/login', user, TrimeConstants.USER_LOGIN);
    },

    signup: function(user) {
      BaseActions.post('/api/users', user, TrimeConstants.USER_SIGNUP);
    },

    session: function() {
      BaseActions.get('/api/users/session', TrimeConstants.USER_SESSION);
    }
  };
})();
