(function() {
  'use strict'
  var request = require('supertest'),
    server = require('../../../index');

  module.exports = {
    login: function(email, password, cb) {
      request(server)
        .post('/api/users/login')
        .send({
          email: email,
          password: password
        })
        .end(function(err, res) {
          expect(res.status).toEqual(200);
          cb(res.body);
        });
    }
  }
})()
