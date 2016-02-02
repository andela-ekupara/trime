(function() {
  'use strict';

  var Sequelize = require('sequelize'),
    env = process.env.NODE_ENV || 'development',
    config = require('./index')[env],
    sequelize = new Sequelize(
      config.db.name,
      config.db.username,
      config.db.password, {
        host: config.db.host,
        dialect: config.db.dialect
      });

  sequelize.sync({
    force: false
  });
  module.exports = sequelize;
})();
