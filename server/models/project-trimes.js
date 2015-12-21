(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('project-trimes', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      description: {
        type: DataTypes.STRING,
        allowNull: true
      },

      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
