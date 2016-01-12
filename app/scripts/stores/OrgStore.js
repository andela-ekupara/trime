(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var TrimeConstants = require('../constants/TrimeConstants');
  var assign = require('object-assign');
  var BaseStore = require('./BaseStore');

  var OrgStore = assign({}, BaseStore, {
    orgs: null,
    orgUsers: null,
    setOrgs: function(orgs) {
      this.orgs = orgs;
      this.emitChange();
    },
    getOrgs: function() {
      return this.orgs;
    },
    setOrgUsers: function(orgUsers) {
      this.orgUsers = orgUsers;
      this.emitChange();
    },

    getOrgUsers: function() {
      return this.orgUsers;
    }
  });

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.ORG_CREATE:
        OrgStore.setData(action.data);
        break;
      case TrimeConstants.ORGS_GET:
        OrgStore.setOrgs(action.data);
        break;
      case TrimeConstants.ORG_USERS:
        OrgStore.setOrgUsers(action.data);
        break;

      default:
        // no operation
    }

    return true; // No errors. Needed by promise in Dispatcher.
  });

  module.exports = OrgStore;

})();
