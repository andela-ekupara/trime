(function() {
  'use strict';

  module.exports = function(app) {
    var Projects = require('../controllers/projects');
    var Users = require('../controllers/users');

    app.route('/api/orgs/:org_id/projects')
      .post(Users.authenticate, Projects.create)
      .get(Users.authenticate, Projects.all);

    app.route('/api/orgs/:org_id/projects/:project_id')
      .get(Users.authenticate, Projects.get)
      .put(Users.authenticate, Projects.update)
      .delete(Users.authenticate, Projects.delete);

    app.route('/api/orgs/:org_id/projects/:project_id/users')
      .get(Users.authenticate, Projects.getUsers)
      .post(Users.authenticate, Projects.addUsers);
  };
})();
