'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('users', [{
        name: 'Kimutai Koech',
        password: bcrypt.hashSync('password'),
        email: 'brnkkoech@ymail.com',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Kimutai Koech',
        password: bcrypt.hashSync('password'),
        email: 'brnkoech@yymail.com',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Test Tester',
        password: bcrypt.hashSync('password'),
        email: 'test@testmail.com',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
