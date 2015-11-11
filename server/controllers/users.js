(function() {
  "use strict";
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
        return res.json(user);
      })(req, res, next);
    }
  };
})();
