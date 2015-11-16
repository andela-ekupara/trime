(function() {
  'use strict';
  var Users = require('../../models/users');
  module.exports = function(passport, config) {
    // serialize the user to maintain the auth state in session
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
    // deserialize user
    passport.deserializeUser(function(id, done) {
      Users.findOne({
          where: {
            id: id
          }
        })
        .then(function(user) {
          done(null, user);
        })
        .catch(function(err) {
          done(err);
        });
    });
    require('./local-auth')(passport);
    require('./github-auth')(passport, config);
  };
})();
