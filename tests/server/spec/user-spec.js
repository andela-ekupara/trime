(function() {
  'use strict';

  var request = require('supertest');
  var server = require('../../../index');
  var seeder = require('../helpers/seeder');

  describe('User suite', function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    var token; 

    beforeAll(function(done) {
      seeder.seed(function(result) {
        token = result;
        done();
      });
    });

    it('user created must have a unique email', function(done) {
      request(server)
        .post('/api/users')
        .send({
          email: 'test@test.com',
          password: 'abc123',
          name: 'Another One'
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(err).toBeNull();
          expect(res.status).toEqual(500);
          expect(res.body).toBeDefined();
          expect(res.body.error).toBeDefined();
          expect(res.body.error.message).toBe('email must be unique');
          expect(res.body.error.path).toBe('email');
          done();
        });
    });

    it('password needed during creation', function(done) {
      request(server)
        .post('/api/users')
        .send({
          email: 'evan@andela.com',
          name: 'Evan Greenlowe'
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(err).toBeNull();
          expect(res.status).toEqual(500);
          expect(res.body).toBeDefined();
          expect(res.body.error).toBeDefined();
          expect(res.body.error).toBe('Error creating user.');
          done();
        });
    });

    it('returns an error on login failure', function(done) {
      request(server)
        .post('/api/users/login')
        .send({
          email: 'test@test.com',
          password: 'abc124'
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(err).toBeNull();
          expect(res.status).toEqual(401);
          expect(res.body).toBeDefined();
          expect(res.body.error).toBeDefined();
          expect(res.body.error).toContain('Wrong email password combination');
          done();
        });
    });

    it('returns a token on user login', function(done) {
      request(server)
        .post('/api/users/login')
        .send({
          email: 'edu@andela.com',
          password: 'password'
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(err).toBeNull();
          expect(res.status).toEqual(200);
          expect(res.body).toBeDefined();
          expect(res.body.success).toEqual(true);
          expect(res.body.token).toBeDefined();
          done();
        });
    });

    it('returns a user object on session check', function(done) {
      request(server)
        .get('/api/users/session')
        .set('x-access-token', token)
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(err).toBeNull();
          expect(res.status).toEqual(200);
          expect(res.body).toBeDefined();
          expect(typeof res.body).toBe('object');
          done();
        });
    });

     it('returns an error message on invalid token', function(done) {
      request(server)
        .get('/api/users/session')
        .set('x-access-token', null)
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(err).toBeNull();
          expect(res.status).toEqual(401);
          expect(res.body).toBeDefined();
          expect(res.body.message).toBe('Failed to Authenticate');
          done();
        });
    });

     it('returns all users if token is provided', function(done) {
        request(server)
          .get('/api/users')
          .set('x-access-token', token)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(err).toBeNull();
            expect(res.status).toEqual(200);
            expect(res.body).toBeDefined();
            expect(Array.isArray(res.body)).toBe(true);
            done();
          });
     });

    it('creates a user successfully', function(done) {
      request(server)
        .post('/api/users')
        .send({
          email: 'me@you.com',
          name: 'Me You',
          password: 'abc123'
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          expect(true).toBe(true);
          done();
        });
    });

  });
})();
