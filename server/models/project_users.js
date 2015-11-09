var Sequelize = require('sequelize'),
  db = require('../config/db-connect'),
  users = require('./users'),
  projects = require('./projects'),
  project_users = db.define('project_users', {
      role: {
        type: Sequelize.ENUM('owner', 'admin', 'co-worker'),
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: users,
          key: 'id'
        }
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: projects,
          key: 'id'
        }
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

module.exports = project_users;
