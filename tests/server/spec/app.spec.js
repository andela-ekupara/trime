describe('Application Spec', () => {
  'use strict';

  let request = require('supertest');
  let app = require('../../../index');

  it('should correctly fetch the homepage', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
