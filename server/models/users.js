var Sequelize = require('sequelize'),
  db = require('../config/db-connect'),
  users = db.define('users', {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      github_auth_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      github_auth_token: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        comment: 'Should be hashed'
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

module.exports = users;
