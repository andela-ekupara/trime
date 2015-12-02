(function() {
  'use strict';
  module.exports = function(app, passport) {
    require('./users')(app);
    require('./auth/github-auth')(app, passport);
    require('./auth/google-auth')(app, passport);
    /* GET home page. */
    app.get('*', function(req, res) {
      res.sendFile('index.html', {
        root: './public/'
      });
    });

    // catch error 404 and forward to error handler
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  };
})();

