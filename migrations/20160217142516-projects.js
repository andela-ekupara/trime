(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('projects', {
        id: {
          type: Sequelize.INTEGER,
          aoutoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING,
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
      return queryInterface.dropTable('projects');
    }
  };
})();
