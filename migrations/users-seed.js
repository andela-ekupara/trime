(function() {
    'use strict';
    var bcrypt = require('bcrypt-nodejs');

  module.exports = {
    up: function(queryInterface) {
      return queryInterface.bulkInsert('users', [{
        id: 1,
        name: 'Kimutai Koech',
        password: bcrypt.hashSync('password'),
        email: 'brnkoech@ymail.com',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
    },

    down: function(queryInterface) {
      return queryInterface.bulkDelete('users', null, {});
    }
  };
})();
