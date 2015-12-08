(function() {
    'use strict';
    var AppDispatcher = require('../dispatcher/AppDispatcher');
    var TrimeConstants = require('../constants/trimeConstants');
    var baseActions = require('./BaseActions');

    var UserActions = {
      login: function(user) {
        baseActions('/api/users/login', user, TrimeConstants.USER_LOGIN);
      },
	    signup: function(user) {
	    	baseActions('/api/users', user, TrimeConstants.USER_SIGNUP);
	    }
  };

  module.exports = UserActions;
})();
