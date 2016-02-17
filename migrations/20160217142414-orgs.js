(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('orgs', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
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
      return queryInterface.dropTable('orgs');
    }
  };
})();
