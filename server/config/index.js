var envVariables = {

    db: {
      name: process.env.DATABASE_NAME,
      dialect: process.env.DATABASE_DIALECT,
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD
    }
  },
  development = envVariables,
  staging = envVariables,
  production = envVariables;

module.exports = {
  development: development,
  staging: staging,
  production: production,
};
