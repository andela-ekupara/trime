(function() {
  'use strict';

module.exports = {
  GITHUB: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL ||
      'http://localhost:3000/auth/github/callback',
    passReqToCallback: true
  },
  GOOGLE: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL ||
      'http://localhost:3000/auth/google/callback',
    passReqToCallback: true
  }
};
})();
