var users = require('../controllers/users');
module.exports = function(app) {
  'use strict';

  app.post('/users/signup', users.signup);
};
