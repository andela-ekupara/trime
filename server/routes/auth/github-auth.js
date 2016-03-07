module.exports = function(app, passport) {
  'use strict';

  // Redirect the user to GitHub for authentication.
  app.get('/auth/github', passport.authenticate('github', {
    scope: ['user']
  }));

  // GitHub will redirect the user to this URL after approval.
  // Finish the authentication process by attempting to obtain an access token.
  // If access was granted, the user will be logged in.
  // Otherwise, authentication has failed.
  app.get('/auth/github/callback', passport.authenticate('github', {
    failureRedirect: '/users/login'}),
    function(req, res) {
      res.redirect('/?token='+req.session.user);
    });

};
