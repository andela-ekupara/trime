module.exports = function(sequelize, DataTypes) {
  'use strict';

  return sequelize.define('project_users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      role: {
        type: DataTypes.ENUM('owner', 'admin', 'user'),
        allowNull: false
      },
    },

    {
      // auto created column fields should use snake case
      underscore: true,
      // disable attempts to pluralize tablename
      freezeTableName: true,
      // add created_at and modified_at columns
      timestamps: true
    });
};
