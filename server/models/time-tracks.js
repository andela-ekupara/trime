(function() {
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('time-tracks', {
      startedAt: {
        type: DataTypes.BIGINT,
        allowNull: false
      },

      finishedAt: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
    },

    {
      // Auto created column fields should use snake case
      underscored: true,
      // Disable attempts to pluralize tablename
      freezeTableName: true,
      // Add created_at and modified_at columns
      timestamps: true
    });
  };
  
})();
