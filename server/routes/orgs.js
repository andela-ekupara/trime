(function() {
  'use strict';

  module.exports = function(app) {
    var Orgs = require('../controllers/orgs');
    var Users = require('../controllers/users');

    app.route('/api/orgs')
      .post(Users.authenticate, Orgs.create)
      .get(Users.authenticate, Orgs.all);

    app.route('/api/orgs/:id')
      .get(Users.authenticate, Orgs.get)
      .put(Users.authenticate, Orgs.update)
      .delete(Users.authenticate, Orgs.delete);

    app.route('/api/orgs/:id/users')
      .post(Users.authenticate, Orgs.addUsers)
      .get(Users.authenticate, Orgs.getUsers);
  };
})();
