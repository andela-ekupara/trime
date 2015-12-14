(function() {
  'use strict';
  var passport = require('passport');

  module.exports = {
    signup: function(req, res, next) {
      passport.authenticate('signup', function(err, user) {
        if (err) {
          return res.status(500).send({
            error: err.errors[0] || err.message
          });
        }
        if (!user) {
          return res.status(500).send({
            error: 'Error creating user.'
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
          return res.send({
            error: err
          });
        }
        if (!user) {
          return res.status(500).send({
            error: 'Wrong email password combination'
          });
        }
        // Initialize user password to null
        user.password = null;
        req.session.user = user;
        res.json(user);
      })(req, res, next);
    },

    session: function(req, res) {
      if (req.session.user) {
        res.send(req.session.user);
      } else {
        res.status(401).send({
          error: {} // You are not logged in.
        });
      }
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
