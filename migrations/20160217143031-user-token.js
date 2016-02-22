(function() {
  'use strict';
  module.exports = {
    up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
        'users',
        'token',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      );
    },
    down: function (queryInterface) {
      return queryInterface.removeColumn('users', 'token');
    }
  };
})();
