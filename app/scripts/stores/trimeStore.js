(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var TrimeConstants = require('../constants/TrimeConstants');
  var assign = require('object-assign');
  var BaseStore = require('./BaseStore');

  var TrimeStore = assign({}, BaseStore);

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case TrimeConstants.ORG_CREATE:
        if (action.data.error) {
          TrimeStore.setError(action.data);
        } else {
          TrimeStore.setData(action.data);
        }
        break;
      default:
        // no op
    }

    return true; // No errors. Needed by promise in Dispatcher.
  });

  module.exports = TrimeStore;

})();
