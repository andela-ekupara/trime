(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher');
  var request = require('superagent');

  module.exports = function baseActions(url, data, actionType) {
    request
      .post(url)
      .send(data)
      .end(function(err, result) {
        AppDispatcher.dispatch({
          actionType: actionType,
          data: result.body
        });
      });
  };

})();
