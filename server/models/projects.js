var Sequelize = require('sequelize'),
  db = require('../config/db_connect)'),
  orgs = require('./orgs'),
  projects = db.define('projects', {
      //primary key

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: true
      },

      // foreign key
      org_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: orgs,
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

module.exports = projects;
