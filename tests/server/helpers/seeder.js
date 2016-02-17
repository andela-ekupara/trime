/*eslint no-console: 0*/
(function() {
  'use strict';

  var async = require('async'),
    server = require('../../../index'),
    sequelize_fixtures = require('sequelize-fixtures'),
    request = require('supertest'),
    models = require('../../../server/models');

  module.exports = {
    seed: function(done) {
      async.waterfall([
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
            sequelize_fixtures.loadFile('tests/server/helpers/data.js', models).then(function(ok) {
              console.log('seed  successfully', ok);
              callback(null);
            });
          }
        ],
        function(err) {
          if (err) {
            process.exit(1);
          } else {
            request(server)
            .post('/api/users/login')
            .send({
              email: 'test@test.com',
              password: 'password'
            })
            .set('Accept', 'application/json')
            .end(function(err, res) {
              done(res.body.token);
            });
          }
        });
    }
  };
})();
