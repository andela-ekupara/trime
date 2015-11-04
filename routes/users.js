module.exports = function(app) {
  'use strict';

  app.get('/users', function(req, res) {
    res.send([]);
  });
};
