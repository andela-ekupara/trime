(function() {
  'use strict';

  var async = require('async'),
    server = require('../../index'),
    sequelize_fixtures = require('sequelize-fixtures'),
    models = require('../../server/models');

  module.exports = {
    seed: function(done) {
      async.waterfall([
          function(callback) {
            models.sequelize.drop({
              cascade: true
            }).then(function() {
              console.log('Drop was successful');
              callback(null);
            });
          },

          function(callback) {
            console.log('THis is happeninig');
            sequelize_fixtures.loadFile('tests/helpers/data.js', models).then(function(ok) {
              console.log('This happened', ok);
              callback(null);
            });
          }
        ],
        function(err) {
          console.log('2');
          done('ok');
        });
    },

    trial: function(done) {
      models.sequelize.sync({
          force: false
        })
        .then(function() {
          console.log('dropping....');
          return models.sequelize.drop({
            cascade: true
          });
        })
        .then(function() {
          console.log('loading.....');
          sequelize_fixtures.loadFile('tests/helpers/data.js', models).then(function() {
            console.log('data loaded');
          });
        })
        .then(function() {
          console.log('it is okey');
          done('koech');
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };
})();
