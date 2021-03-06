(function() {
  'use strict';

  var Users = require('../controllers/users');
  module.exports = function(app) {
    app.route('/api/users')
      .get(Users.authenticate, Users.all)
      .post(Users.signup);

    app.post('/api/users/login', Users.login);
    app.get('/api/users/session', Users.authenticate, Users.session);
    app.put('/api/users/logout', Users.authenticate, Users.logout);
  };
})();
