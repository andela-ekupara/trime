(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('project_trimes', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true
        },
        complete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      }, {
        // Auto created column fields should use snake case
        underscored: true,
        // Disable attempts to pluralize tablename
        freezeTableName: true,
        // Add created_at and modified_at columns
        timestamps: true
      });
    }
  };
})();
