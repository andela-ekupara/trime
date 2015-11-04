var Sequalize = require('sequalize'),
  db = require('../config/db-connect'),
  users = db.define('users', {

      username: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true
      },

      firstname: {
        type: Sequalize.STRING
      },

      lastname: {
        type: Sequalize.STRING
      },

      email: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },

      password: {
        type: Sequalize.STRING,
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
