describe('Application Spec', function() {
  'use strict';

  var request = require('supertest');
  var app = require('../../../index');

  it('should correctly fetch the homepage', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
