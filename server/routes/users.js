(function() {
  'use strict';
  var users = require('../controllers/users');

  module.exports = function(app) {
    app.post('/users/signup', users.signup);
    app.post('/users/login', users.login);
  };
})();
