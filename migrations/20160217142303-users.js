(function() {
  'use strict';
  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('users', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          github_auth_id: {
            type: Sequelize.STRING,
            allowNull: true
          },
          github_auth_token: {
            type: Sequelize.STRING,
            allowNull: false
          },
          google_auth_id: {
            type: Sequelize.STRING,
            allowNull: true
          },
          google_auth_token: {
            type: Sequelize.STRING,
            allowNull: true
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
          }
        },
        // Table configuration
        {
          // Auto created column fields should use snake case
          underscored: true,
          // Disable attempts to pluralize tablename
          freezeTableName: true,
          // Add created_at and modified_at columns
          timestamps: true
        });
    },

    down: function(queryInterface) {
      return queryInterface.dropTable('users');
    }
  };
})();
