(function() {
  'use strict';

  var request = require('supertest'),
    server = require('../../../index'),
    clearDb = require('../helpers/seeder'),
    login = require('../helpers/login'),
    orgId;


  describe('testing', function() {
    // beforeEach(function(done) {
    //   clearDb.seed(function(ok) {
    //     expect(ok).toBe('ok');
    //     done();
    //   });
    // });


    it('expect ok', function(done) {
      expect(1).toEqual(1);
      done();
    });

    it('org must have a name', function(done) {
      login.login('jere@jere.com', 'password', function(body) {
        request(server)

        .send({
            name: 'An Org to Test',
            description: 'Thous shalt be tested'
          })
          .end(function(err, res) {
            orgId = res.body.id
            expect(err).toBeNull();
            expect(res.status).toEqual(200);
            expect(res.body.id).toBeDefined();
            expect(res.body.name).toBe('An Org to Test');
            expect(res.body.description).toBe('Thous shalt be tested');
            expect(res.body.created_at).toBeDefined();
          });
        done();
      });
    });

    // it('Can return a specific org', function(done) {
    //   request(server)
    //       .post('/api/users/login')
    //       .send({
    //         name: 'An Org to Test',
    //         description: 'Thous shalt be tested'
    //       })
    //       .end(function(err, res) {
    //         orgId = res.body.id
    //         expect(err).toBeNull();
    //         expect(res.status).toEqual(200);
    //         expect(res.body.id).toBeDefined();
    //         expect(res.body.name).toBe('An Org to Test');
    //         expect(res.body.description).toBe('Thous shalt be tested');
    //         expect(res.body.created_at).toBeDefined();
    //       });
    //     done();
    // })

  });

})();
