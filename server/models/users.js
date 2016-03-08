(function() {
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true
        },
        github_auth_id: {
          type: DataTypes.STRING,
          allowNull: true
        },
        github_auth_token: {
          type: DataTypes.STRING,
          allowNull: true
        },
        google_auth_id: {
          type: DataTypes.STRING,
          allowNull: true
        },
        google_auth_token: {
          type: DataTypes.STRING,
          allowNull: true
        },
        password: {
          type: DataTypes.STRING,
          comment: 'Should be hashed'
        },
        token: {
          type: DataTypes.STRING,
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
