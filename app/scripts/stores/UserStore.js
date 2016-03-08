(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    TrimeConstants = require('../constants/TrimeConstants'),
    assign = require('object-assign'),
    BaseStore = require('./BaseStore');

  var UserStore = assign({}, BaseStore, {
    fetchedUsers: null,
    session: null,

    setUsers: function(users) {
      this.fetchedUsers = users;
      this.emitChange();
    },

    getUsers: function() {
      return this.fetchedUsers;
    },

    setSession: function(session) {
      this.session = session;
      this.emitChange('session');
    },

    getSession: function() {
      return this.session;
    },
  });

  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.USER_LOGIN:
        UserStore.setData(action.data, 'login');
        break;
      case TrimeConstants.USER_LOGOUT:
        UserStore.setData(action.data, 'logout');
        break;
      case TrimeConstants.USER_SEARCH:
        UserStore.setUsers(action.data);
        break;
      case TrimeConstants.USER_SIGNUP:
        UserStore.setData(action.data, 'signup');
        break;
      case TrimeConstants.USER_SESSION:
        UserStore.setSession(action.data);
        break;
      case TrimeConstants.GITHUB_LOGIN:
        UserStore.setData(action.data);
        break;
      case TrimeConstants.GOOGLE_LOGIN:
        UserStore.setData(action.data);
        break;
      default:
        // no operation for default
    }

    return true;
  });

  module.exports = UserStore;
})();
