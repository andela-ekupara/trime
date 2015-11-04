var Sequelize = require('sequelize'),
  db = require('../config/db-connect'),
  users = require('./users'),
  orgs = require('./orgs'),
  org_users = db.define('org_users', {
    role: {
      type: Sequelize.ENUM('owner', 'admin', 'user'),
      allowNull: false
    },

    // foreign keys
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: users,
        key: 'id'
      }
    },

    org_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: orgs,
        key: 'id'
      }
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

module.exports = org_users;
