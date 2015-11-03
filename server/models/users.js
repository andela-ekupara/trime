var Sequalize = require('sequalize'),
  db = require('../config/db-connect'),
  Users = db.define('users', {

    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    username: {
      type: Sequalize.STRING,
      unique: true
    },

    firstname: {
      type: Sequalize.STRING
    },

    lastname: {
      type: Sequalize.STRING
    },

    email: {
      type: Sequalize.STRING
    },

    password: {
      type: Sequalize.STRING,
      comment: "Should be hashed"
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
