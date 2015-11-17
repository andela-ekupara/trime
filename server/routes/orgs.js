(function() {
  module.exports = function(app) {
    'use strict';

    var Org = require('../controllers/orgs');

    app.route('/api/orgs')
      .post(Org.create);
  };
})();
