(function() {
  module.exports = function(app) {
    'use strict';

    var Projects = require('../controllers/projects');
    var Users = require('../controllers/users');

    app.route('/api/orgs/:org_id/projects')
      .post(Users.authenticate, Projects.create)
      .get(Users.authenticate, Projects.all);

    app.route('/api/orgs/:org_id/projects/:project_id')
      .get(Users.authenticate, Projects.get)
      .put(Users.authenticate, Projects.update)
      .delete(Users.authenticate, Projects.delete);
  };
})();
