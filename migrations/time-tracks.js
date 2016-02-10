(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('time_tracks', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true
        },
        startedAt: {
          type: Sequelize.BIGNINT,
          allowNull: false
        },
        finishedAt: {
          type: Sequelize.BIGINT,
          allowNull: true
        }
      }, {
        // Auto created column fields should use snake case
        underscored: true,
        // Disable attempts to pluralize tablename
        freezeTableName: true,
        // Add created_at and modified_at columns
        timestamps: true
      });
    },
    down: function(queryInterface) {
      return queryInterface.dropTable('time_tracks');
    }
  };
})();
