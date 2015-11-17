(function() {
  module.exports = function(app) {
    'use strict';

    var Orgs = require('../controllers/orgs');

    app.route('/api/orgs')
      .post(Orgs.create)
      .get(Orgs.all);
  };
})();
