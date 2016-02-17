(function() {
  'use strict';

var passportConfig = require('./passport-config'),
  envVariables = {
    auth: passportConfig,
    expressSessionKey: process.env.EXPRESS_SESSION_KEY,
    db: {
      name: process.env.DATABASE_NAME,
      dialect: process.env.DATABASE_DIALECT || 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD
    }
  },
  development = envVariables,
  staging = envVariables,
  production = envVariables,
  test = envVariables;

module.exports = {
  development: development,
  staging: staging,
  production: production,
  test: test
};

})();
