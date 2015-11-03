var Sequelize = require('sequelize'),
  db = require('../config/db-connect'),
  Orgs = db.define('orgs', {
    // 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    name: {
      type: Sequelize.STRING
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },

    {
      // auto created column fields should use snake case
      underscore: true,
      // disable attempts to pluralize tablename 
      freezeTableName: true,
      // add created_at and modified_at columns
      timestamps: true
    }

  });
