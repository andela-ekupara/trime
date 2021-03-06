(function() {
  'use strict';

  var passport = require('passport'),
    Users = require('../models').Users,
    jwt = require('jsonwebtoken');

  module.exports = {
    all: function(req, res, next) {
      var q = req.query.q,
        query;

      if (q) {
        query = {
          where: {
            name: {
              $iLike: '%' + q + '%'
            }
          }
        };
      }

      Users.sync().then(function() {
          return Users.findAll(query)
            .then(function(users) {
              return res.json(users);
            });
        })
        .catch(function(err) {
          return next(err);
        });
    },

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
        } else {
          // return the token to backend
          var secretKey = req.app.get('superSecret');

          var token = jwt.sign({
            id: user.id,
            email: user.email
          }, secretKey, {
            expiresIn: '86400h'
          });
          user.token = token;
          user.save();
          user.password = null;
          return res.send(user); 
        }

      })(req, res, next);
    },

    // Login middleware handler
    login: function(req, res, next) {
      passport.authenticate('login', function(err, user) {
        if (err) {
          return res.status(500).send({
            error: err
          });
        } else if (!user) {
          return res.status(401).send({
            error: 'Wrong email password combination'
          });
        } else {
          // create a token
          // save the token to db
          // return the token to backend
          var secretKey = req.app.get('superSecret');

          var token = jwt.sign({
            id: user.id,
            email: user.email
          }, secretKey, {
            expiresIn: '86400h'
          });

          user.token = token;
          user.save();
          user.password = null;
          return res.send(user);
        }

      })(req, res, next);
    },

    session: function(req, res) {
      Users.findOne({
          where: {
            id: req.decoded.id
          }
        })
        .then(function(user) {
          if (user && user.token === req.token) {
              user.password = null;
              return res.send(user);
          }

          res.status(401).send({
            error: 'Failed to Authenticate User'
          });
      });
    },

    authenticate: function(req, res, next) {
      var token = req.body.token || req.headers['x-access-token'];
      if (token) {
        var secretKey = req.app.get('superSecret');
        jwt.verify(token, secretKey, function(err, decoded) {
          if (!err) {
            req.decoded = decoded;
            req.token = token;
            // check if token exists in the db
            next();
          } else {
            return res.status(401).send({
              error: 'Failed to Authenticate'
            });
          }
        });
      } else {
        return res.status(401).send({
          error: 'You are not authenticated'
        });
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

    logout: function(req, res) {
      // get user id from decoded token
      Users.update({
        token: null
      }, {
        where: {
          id: req.decoded.id
        }
      }).then(function(ok) {
        if (ok) {
          res.send({
            message: 'You have been logged out successfully'
          });
        } else {
          res.status(500).send({
            error: 'could not logout'
          });
        }
      });
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
