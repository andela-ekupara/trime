(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var TrimeConstants = require('../constants/TrimeConstants');
  var assign = require('object-assign');
  var BaseStore = require('./BaseStore');

  var TrackingStore = assign({}, BaseStore);

  // Reg a cb
  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.GET_PROJECTS:
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
