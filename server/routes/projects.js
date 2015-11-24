(function() {
  module.exports = function(app) {
    'use strict';

    var Projects = require('../controllers/projects');

    app.route('/api/projects')
      .post(Projects.create);
    //   .get(Projects.all);

    // app.route('/api/projects/:id')
    //   .get(Projects.get)
    //   .put(Projects.update)
    //   .delete(Projects.delete);

  };
})();
