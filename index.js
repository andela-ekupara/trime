/*eslint no-console: 0*/
(function() {
  'use strict';

  var env = process.env.NODE_ENV || 'development';
  if (env === 'development') {
    require('dotenv').load();
  }

  var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    routes = require('./server/routes'),
    app = express(),
    config = require('./server/config')[env],
    passport = require('passport'),
    session = require('express-session'),
    // favicon = require('serve-favicon'),
    auth = require('./server/services/auth');

  // view engine setup
  app.set('views', path.join(__dirname, 'server/views'));
  app.set('view engine', 'jade');
  app.set('superSecret', config.secret);

  //uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '/public')));

  // call auth
  auth(passport, config);

  // passport config
  app.use(session({
    secret: config.expressSessionKey,
    proxy: true,
    resave: true,
    saveUninitialized: true
  }));

  // passport initialization
  app.use(passport.initialize());
  app.use(passport.session());

  routes(app, passport);
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });

  var PORT = process.env.PORT || '3000';
  app.listen(PORT, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening on ', PORT);
  });

  module.exports = app;
})();
