module.exports = function(app, passport) {
  'use strict';
  
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
  }));

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/users/login'}), 
    function(req, res) {
      res.redirect('/?token=' + req.token);
    });
};
