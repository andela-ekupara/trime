module.exports = function(app, passport) {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
  }));

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/users/login',
    successRedirect: '/'
  }));
};
