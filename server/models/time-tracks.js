(function() {
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('time-tracks', {
      startedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },

      finishedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },

      time_tracked: {
        type: DataTypes.BIGINT
      }
    }, {
      // Auto created column fields should use snake case
      underscored: true,
      // Disable attempts to pluralize tablename
      freezeTableName: true,
      // Add created_at and modified_at columns
      timestamps: true
    });
  };
})();
