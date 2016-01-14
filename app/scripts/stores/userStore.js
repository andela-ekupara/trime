(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    TrimeConstants = require('../constants/TrimeConstants'),
    assign = require('object-assign'),
    BaseStore = require('./BaseStore');

  var UserStore = assign({}, BaseStore, {
    fetchedUsers: null,
    setUsers: function(users) {
      this.fetchedUsers = users;
      this.emitChange();
    },

    getUsers: function() {
      return this.fetchedUsers;
    }
  });

  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.USER_LOGIN:
        UserStore.setData(action.data);
        break;
      case TrimeConstants.USER_SEARCH:
        UserStore.setUsers(action.data);
        break;
      case TrimeConstants.USER_SIGNUP:
        UserStore.setData(action.data);
        break;
      case TrimeConstants.USER_SESSION:
        UserStore.setData(action.data);
        break;
      case TrimeConstants.GITHUB_LOGIN:
        UserStore.setData(action.data);
        break;
      case TrimeConstants.GOOGLE_LOGIN:
        UserStore.setData(action.data);
        break;
      default:
        // no operation
    }

    return true;
  });

  module.exports = UserStore;
})();
