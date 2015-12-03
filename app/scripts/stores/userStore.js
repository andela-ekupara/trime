(function() {
  'use strict';
  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    request = require('superagent'),
    EventEmitter = require('events').EventEmitter,
    TrimeConstants = require('../constants/trimeConstants'),
    assign = require('object-assign');

    function login(user, callback) {
      request
        .post('/api/users/login')
        .send(user)
        .end(function(err, user) {
          if(err){
            console.log("GERTY" +err);
          }
          console.log("dbfjahh");
          callback(user);  
        });
  	}

    function signup(user, callback) {
        request
          .post('/api/users')
          .send(user)
          .end(function(err, user) {
            if(err) throw err;

            callback(user);
          });
    }

    var UserStore = assign({}, EventEmitter.prototype, {
    	emitChange: function() {
    		this.emit('change');
    	},
    	addChangeListener: function(callback) {
    		this.on('change', callback);
    	},
    	removeChangeListener: function(callback) {
    		this.removeListener('change', callback)
    	}
    });

    AppDispatcher.register(function(action) {
    	switch(action.actionType) {
    		case TrimeConstants.USER_LOGIN:
	        login(action.data, function(user) {
	          console.log(user);
	        });
	        // UserStore.emitChange();
          break;
        case TrimeConstants.USER_SIGNUP:
          signup(action.data, function(user) {
            console.log(user);
          });
          break;
        default:
        	// no operation
  		}

  		return true;
    });

    module.exports = UserStore;
})();
