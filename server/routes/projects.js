(function() {
  module.exports = function(app) {
    'use strict';

    var Projects = require('../controllers/projects');

    app.route('/api/orgs/:org_id/projects')
      .post(Projects.create)
      .get(Projects.all);

    app.route('/api/orgs/:org_id/projects/:project_id')
      .get(Projects.get)
      .put(Projects.update)
      .delete(Projects.delete);

  };
})();
