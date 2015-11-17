(function() {
  'use strict';
  module.exports = function(passport, config) {
    var Users = require('../../models/users'),
      GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    passport.use('google', new GoogleStrategy(config.auth.GOOGLE,
      function(accessToken, tokenSecret, profile, done) {
        Users.sync().then(function() {
          Users.findOne({
              where: {
                google_auth_id: profile.id
              }
            })
            .then(function(user) {
              if (!user) {
                Users.create({
                    username: profile.emails[0].value.split('@')[0],
                    email: profile.emails[0].value,
                    google_auth_id: profile.id,
                    google_auth_token: accessToken,
                  })
                  .then(function(user) {
                    return done(null, user);
                  })
                  .catch(function(err) {
                    return done(err);
                  });
              } else {
                // return user
                done(null, user);
              }
            })
            .catch(function(err) {
              return done(err);
            });
        });
      }));
  };
})();
