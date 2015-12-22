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
    }, {
      // auto created column fields should use snake case
      underscored: true,
      // disable attempts to pluralize tablename
      freezeTableName: true,
      // add created_at and modified_at columns
      timestamps: true
    });
  };
})();
