(function() {
  'use strict';
  var TrimeConstants = require('../constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    search: function(q) {
      BaseActions.get('/api/users?q=' + q, TrimeConstants.USER_SEARCH);
    },

    login: function(user) {
      BaseActions.post('/api/users/login', user, TrimeConstants.USER_LOGIN);
    },

    signup: function(user) {
      BaseActions.post('/api/users', user, TrimeConstants.USER_SIGNUP);
    },

    session: function() {
      BaseActions.get('/api/users/session', TrimeConstants.USER_SESSION);
    },

    githubLogin: function() {
      BaseActions.get('/auth/github', TrimeConstants.GITHUB_LOGIN);
    },

    googleLogin: function() {
      BaseActions.get('/auth/google', TrimeConstants.GOOGLE_LOGIN);
    }
  };
})();
