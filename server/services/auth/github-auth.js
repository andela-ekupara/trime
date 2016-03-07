(function() {
  'use strict';

  module.exports = function(passport, config) {
    var Users = require('../../models').Users,
      GitHubStrategy = require('passport-github2').Strategy,
      jwt = require('jsonwebtoken');

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
                    // create a token and add it to db
                    var secretKey = req.app.get('superSecret');

                     var token = jwt.sign({
                      id: user.id,
                      email: user.email
                    }, secretKey, {
                      expiresIn: '86400h'
                    });

                    user.token = token;
                    user.save();
                    user.github_auth_token = null;
                    req.session.user =  user.token;
                    return done(null, user);
                  })
                  .catch(function(err) {
                    return done(err);
                  });
              } else {
                // create a token and add it to db
                var secretKey = req.app.get('superSecret');
                    
                var token = jwt.sign({
                  id: user.id,
                  email: user.email
                }, secretKey, {
                  expiresIn: '86400h'
                });

                user.token = token;
                user.save();
                user.github_auth_token = null;
                // return user
                req.session.user =  user.token;
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
