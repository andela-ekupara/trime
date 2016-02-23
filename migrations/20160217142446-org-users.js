(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('org_users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true
        },
        role: {
          type: Sequelize.ENUM('owner', 'admin', 'user'),
          allowNull: false
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
      return queryInterface.dropTable('org_users');
    }
  };
})();