(function() {
  'use strict';

  var Sequelize = require('sequelize'),
    env = process.env.NODE_ENV || 'development',
    config = require('./index')[env];

  var sequelize;

  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
  } else {
    sequelize = new Sequelize(
      config.db.name,
      config.db.username,
      config.db.password, {
        host: config.db.host,
        dialect: config.db.dialect
      });
  }

  sequelize.sync({
    force: false
  });
  module.exports = sequelize;
})();
