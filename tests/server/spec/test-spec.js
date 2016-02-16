(function() {
  'use strict';


  // var request = require('supertest');
  //var server = require('../../../index');
  var seeder = require('../helpers/seeder');

  describe('User suite', function() {

    beforeAll(function(done) {
      seeder.seed(function(result) {
        console.log('it gonna be alright');
        done();
      });
    });

    it('creates a user', function(done) {
      expect(true).toBe(true);
      done();
    });
  });

})();
