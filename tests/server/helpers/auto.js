(function() {
  'use strict';

  var Umzug = require('umzug');
  var umzug = new Umzug({});

  umzug.execute({
    migrations: ['some-id', 'some-other-id'],
    method: 'up'
  }).then(function (migrations) {
  // "migrations" will be an Array of all executed/reverted migrations.
    console.log(migrations);
  });

})();