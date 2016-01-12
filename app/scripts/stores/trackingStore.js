(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var TrimeConstants = require('../constants/TrimeConstants');
  var assign = require('object-assign');
  var BaseStore = require('./BaseStore');

  var TrackingStore = assign({}, BaseStore, {
    data: null, 
    setProjects: function(data) {
      this.data = data;
    },
    setError: function(err) {
      this.data = err;
    }, 
    setTracker: function(trackmsg) {
      this.data = trackmsg;
    }
  });

  // Reg a cb
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
      console.log('ERROR');
      console.log(action.data);
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setTracker(action.data);
        }
        break;

      case TrimeConstants.PAUSE:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setData(action.data);
        }
        break;

      case TrimeConstants.RESUME:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setData(action.data);
        }
        break;
        
      case TrimeConstants.STOP:
        if (action.data.error) {
          TrackingStore.setError(action.data);
        } else {
          TrackingStore.setData(action.data);
        }
        break;
      default:
    }

    return true;
  });
  module.exports = TrackingStore;
})();
