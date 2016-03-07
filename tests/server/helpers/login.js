/*eslint no-console: 0*/
(function() {
  'use strict';

  var server = require('../../../index'),
      request = require('supertest');

  module.exports = {
    login: function(done) {
      request(server)
        .post('/api/users/login')
        .send({
          email: 'test@testmail.com',
          password: 'password'
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          done(res.body.token);
        });
    }
  };
})();
