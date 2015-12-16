(function() {
  'use strict';

  module.exports = function(passport, config) {
    var Users = require('../../models').Users,
      GitHubStrategy = require('passport-github2').Strategy;

    passport.use('github', new GitHubStrategy(config.auth.GITHUB,
      function(req, accessToken, refreshToken, profile, done) {
        // check if the user exists
        Users.sync().then(function() {
          Users.findOne({
              where: {
                github_auth_id: profile.id
              }
            })
            .then(function(user) {
              if (!user) {
                Users.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    github_auth_id: profile.id,
                    github_auth_token: accessToken
                  })
                  .then(function(user) {
                    req.session.user = user;
                    return done(null, user);
                  })
                  .catch(function(err) {
                    return done(err);
                  });
              } else {
                req.session.user = user;
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
