/*eslint no-console: 0*/
(function() {
  'use strict';

  var async = require('async'),
    server = require('../../../index'),
    sequelize_fixtures = require('sequelize-fixtures'),
    models = require('../../../server/models');

  module.exports = {
    seed: function(done) {
      async.waterfall([
          function(callback) {
            console.log('droping.....');
            models.sequelize.drop({
              cascade: true
            }).then(function() {
              console.log('Drop was successful');
              callback(null);
            });
          },
          function(callback) {
            console.log('syncing ......');
            models.sequelize.sync({
              force: true
            }).then(function() {
              console.log('Sync successful');
              callback(null);
            });
          },
          function(callback) {
            console.log('seeding......');
            sequelize_fixtures.loadFile('tests/helpers/data.js', models).then(function(ok) {
              console.log('seed  successfully', ok);
              callback(null);
            });
          }
        ],
        function(err) {
          if (err) {
            process.exit(1);
          } else {
            done('ok');
          }
        });
    }
  };
})();
