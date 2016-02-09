(function() {
  'use strict';

  var Users = require('../controllers/users');
  module.exports = function(app) {
    app.route('/api/users')
      .get(Users.authenticate, Users.all)
      .post(Users.signup);

    app.post('/api/users/login', Users.login);
    //app.get('/api/users/session', Users.session);
    app.get('/logout', Users.logout);
  };
})();
