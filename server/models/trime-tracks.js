(function() {
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('project-trime', {
      start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },

      pause_time: {
        type: DataTypes.DATE,
        allowNull: true
      },

      stop_time: {
        type: DataTypes.DATE,
        allowNull: true
      },

      time_tracked: {
        type: DataTypes.DATE
      },

      description: {
        type: DataTypes.STRING,
        allowNull: true
      },

      flags: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
      }
    }, {
      underscored: true,

      freezeTableName: true,

      timestamp: true
    });
  };
})();
