module.exports = function(app) {
  'use strict';

  require('./users')(app);
  /* GET home page. */
  app.get('/*', function(req, res) {
    res.sendFile('index.html', {
      root: './public/'
    });
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};
