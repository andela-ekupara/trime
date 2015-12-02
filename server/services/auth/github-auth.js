(function() {
  'use strict';
  module.exports = function(passport, config) {
    var Users = require('../../models/users'),
      GitHubStrategy = require('passport-github2').Strategy;

    passport.use('github', new GitHubStrategy(config.auth.GITHUB,
      function(accessToken, refreshToken, profile, done) {
        // check if the user exists
        Users.sync().then(function() {
          Users.findOne({
              where: {
                github_auth_id: profile.id
              },
            })
            .then(function(user) {
              if (!user) {
                Users.create({
                    username: profile.username,
                    email: profile.emails[0].value,
                    github_auth_id: profile.id,
                    github_auth_token: accessToken,
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
      }
    ));
  };
})();
