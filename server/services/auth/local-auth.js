(function() {
  'use strict';
  
  module.exports = function(passport) {
    var Users = require('../../models').Users,
      bcrypt = require('bcrypt-nodejs'),
      LocalStrategy = require('passport-local').Strategy;

    // local signup
    passport.use('signup', new LocalStrategy({
        // set the field name
        usernameField: 'email',
        passwordField: 'password',
        nameField: 'name',
        passReqToCallback: true
      },
      function(req, username, password, done) {
        // get signup details from input args of the func
        Users.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            name: req.body.name
          })
          .then(function(user) {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(function(err) {
            return done(err);
          });
      }));

    // local login
    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: true
      },
      function(email, password, done) {
        // get username and pswd from input args
        // fetch the user from the database
        Users.findOne({
            where: {
              email: email
            }
          })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: 'The user does not exist'
              });
            } else if (!bcrypt.compareSync(password, user.password)) {
              // if password does not match
              return done(null, false, {
                message: 'Wrong password'
              });
            } else {
              // everything is OK
              return done(null, user);
            }
          })
          .catch(function(err) {
            // catch the error
            return done(err);
          });
      }));
  };
})();
