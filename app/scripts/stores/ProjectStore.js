(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var TrimeConstants = require('../constants/TrimeConstants');
  var assign = require('object-assign');
  var BaseStore = require('./BaseStore');

  var ProjectStore = assign({}, BaseStore, {
    projects: null,
    projectResult: null,
    projectUser: null,

    setProjectUser: function(user) {
      this.projectUser = user;
      this.emitChange();
    },

    getProjectUser: function() {
      return this.projectUser;
    },

    setProjectResult: function(project) {
      this.projectResult = project;
      this.emitChange();
    },

    getProjectResult: function() {
      return this.projectResult;
    },

    setProjects: function(projects) {
      this.projects = projects;
      this.emitChange();
    },

    getProjects: function() {
      return this.projects;
    }
  });

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.PROJECTS_GET:
        ProjectStore.setProjects(action.data);
        break;
      case TrimeConstants.PROJECT_CREATE:
        ProjectStore.setProjectResult(action.data);
        break;
      case TrimeConstants.PROJECT_USERS_CREATE:
        ProjectStore.setProjectUser(action.data);
        break;

      default:
        // no operation
    }

    return true; // No errors. Needed by promise in Dispatcher.
  });

  module.exports = ProjectStore;

})();
