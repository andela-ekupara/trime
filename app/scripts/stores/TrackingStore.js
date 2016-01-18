(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var TrimeConstants = require('../constants/TrimeConstants');
  var assign = require('object-assign');
  var BaseStore = require('./BaseStore');

  var TrackingStore = assign({}, BaseStore, {
    projects: null,
    track: null,
    setProjects: function(projects) {
      this.projects = projects;
      this.emitChange();
    },
    getProjects: function() {
      return this.projects;
    },
    setError: function(err) {
      this.data = err;
    },
    setTrack: function(trackmsg) {
      this.track = trackmsg;
      this.emitChange();
    },
    getTrack: function() {
      return this.track;
    }
  });

  // Register a callback
  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.GET_PROJECTS:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setProjects(action.data);
        }
        break;

      case TrimeConstants.START:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setTrack(action.data);
        }
        break;

      case TrimeConstants.PAUSE:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setTrack(action.data);
        }
        break;

      case TrimeConstants.RESUME:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setTrack(action.data);
        }
        break;

      case TrimeConstants.STOP:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setTrack(action.data);
        }
        break;
      default:
    }

    return true;
  });
  module.exports = TrackingStore;
})();
