(function() {
    'use strict';
    var AppDispatcher = require('../dispatcher/AppDispatcher');
    var TrimeConstants = require('../constants/trimeConstants');

    var UserActions = {
      login: function(user) {
      	
        AppDispatcher.dispatch({
          actionType: TrimeConstants.USER_LOGIN,
          data: user
        });
        console.log(AppDispatcher);
      },
	    signup: function(user) {
	    	AppDispatcher.dispatch({
	    		actionType:TrimeConstants.USER_SIGNUP,
	    		data: user
	    	});
	    }
  };

  module.exports = UserActions;
})();
