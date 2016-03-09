(function() {
  'use strict';

  module.exports = function(passport, config) {
    var Users = require('../../models').Users,
      GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
      jwt = require('jsonwebtoken');

    passport.use('google', new GoogleStrategy(config.auth.GOOGLE,
      function(req, accessToken, tokenSecret, profile, done) {
        Users.sync().then(function() {
          Users.findOne({
              where: {
                google_auth_id: profile.id
              }
            })
            .then(function(user) {
              if (!user) {
                Users.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    google_auth_id: profile.id,
                    google_auth_token: accessToken
                  })
                  .then(function(user) {
                    var secretKey = req.app.get('superSecret');
                    var token = jwt.sign({
                      id: user.id,
                      email: user.email
                    }, secretKey, {
                      expiresIn: '86400h'
                    });

                    user.token = token;
                    user.save();
                    req.token =  user.token;
                    
                    return done(null, user);
                  })
                  .catch(function(err) {
                    return done(err);
                  });
              } else {
                var secretKey = req.app.get('superSecret');
                var token = jwt.sign({
                  id: user.id,
                  email: user.email
                }, secretKey, {
                  expiresIn: '86400h'
                });

                user.token = token;
                user.save();
                
                req.token =  user.token;
                return done(null, user);
              }
            })
            .catch(function(err) {
              return done(err);
            });
        });
      }));
  };
})();
