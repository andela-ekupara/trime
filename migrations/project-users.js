(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('project_users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        role: {
          type: Sequelize.ENUM('owner', 'admin', 'user'),
          allowNull: false
        }
      }, {
        // Auto created column fields should use snake case
        underscore: true,
        // Disable attempts to pluralize tablename
        freezeTableName: true,
        // Add created_at and modified_at columns
        timestamps: true
      });
    },
    down: function(queryInterface) {
      return queryInterface.dropTable('project_users');
    }
  };
})();
