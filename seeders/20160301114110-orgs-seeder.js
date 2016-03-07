(function() {
  'use strict';

  module.exports = {
    up: function (queryInterface) {
      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkInsert('Person', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
      return queryInterface.bulkInsert('orgs', [{
          name: 'Andela Kenya',
          description: 'This is TIA',
          created_at: new Date(),
          updated_at: new Date()
        }, {
          name: 'Andela Nigeria',
          description: 'This is another TIA',
          created_at: new Date(),
          updated_at: new Date()
        }], {});
    }
    /*
    down: function (queryInterface) {
      
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkDelete('Person', null, {});
    }
    */
  };
})();
