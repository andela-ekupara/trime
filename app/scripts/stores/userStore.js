(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    request = require('superagent'),
    EventEmitter = require('events').EventEmitter,
    TrimeConstants = require('../constants/trimeConstants'),
    assign = require('object-assign'),
    BaseStore = require('./BaseStore');

    var UserStore = assign({}, BaseStore);

    AppDispatcher.register(function(action) {
    	switch(action.actionType) {
    		case TrimeConstants.USER_LOGIN:
            UserStore.setData(action.data);
          break;
        case TrimeConstants.USER_SIGNUP:
            UserStore.setData(action.data);
          break;
        default:
        	// no operation
  		}

    return true;
  });

  module.exports = UserStore;
})();
