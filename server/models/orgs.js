var Sequelize = require('sequelize'),
  db = require('../config/db-connect'),
  orgs = db.define('orgs', {

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true
      }

    },

    {
      // auto created column fields should use snake case
      underscore: true,
      // disable attempts to pluralize tablename 
      freezeTableName: true,
      // add created_at and modified_at columns
      timestamps: true
    });

module.exports = orgs;
