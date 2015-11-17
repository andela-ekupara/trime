(function() {
  module.exports = function(app) {
    'use strict';

    var Orgs = require('../controllers/orgs');

    app.route('/api/orgs')
      .post(Orgs.create)
      .get(Orgs.all);

    app.route('/api/orgs/:id')
      .get(Orgs.get)
      .put(Orgs.update)
      .delete(Orgs.delete);
  };
})();
