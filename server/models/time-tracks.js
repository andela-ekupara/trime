(function() {
  'use strict';

  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('time_tracks', {
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
        type: DataTypes.BIGINT
      },

      description: {
        type: DataTypes.STRING,
        allowNull: true
      },

      tracking_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {
      underscored: true,

      freezeTableName: true,

      timestamps: true
    });
  };
})();
