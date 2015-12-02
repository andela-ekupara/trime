(function() {
  'use strict';
  var passport = require('passport');

  module.exports = {
    signup: function(req, res, next) {
      passport.authenticate('signup', function(err, user) {
        if (err) {
          return res.status(500).send({
            error: err.errors || err.message
          });
        }
        if (!user) {
          return res.status(500).send({
            error: 'User already exists'
          });
        }
        user.password = null;
        return res.json(user);
      })(req, res, next);
    },
    // login middleware handler
    login: function(req, res, next) {
      passport.authenticate('login', function(err, user) {
        if (err) {
          return res.status(500).send(err);
        }
        if (!user) {
          return res.status(500).send({
            error: 'User doesn\'t exist'
          });
        }
        // initialize user password to null sto avoid pswd being saved to session
        user.password = null;
        req.session.user = user;
        res.json(user);
      })(req, res, next);
    },

    authenticate: function(req, res, next) {
      if (!req.session.user) {
        res.status(401).send({
          error: 'You are not authorised! :('
        });
      } else {
        next();
      }
    },

    superAdmin: function(req, res, next) {
      if (req.user && req.user.role === 1) {
        next();
      } else {
        res.status(403).send({
          error: 'Forbidden'
        });
      }
    },

    orgAdmin: function(req, res, next) {
      if (req.user && req.user.role === 1) {
        next();
      } else {
        res.status(403).send({
          error: 'Forbidden'
        });
      }
    }
  };
})();
