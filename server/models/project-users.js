module.exports = function(sequelize, DataTypes) {
  'use strict';

  return sequelize.define('project-users', {
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
      // Auto created column fields should use snake case
      underscore: true,
      // Disable attempts to pluralize tablename
      freezeTableName: true,
      // Add created_at and modified_at columns
      timestamps: true
    });
};
