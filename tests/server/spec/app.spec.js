(function() {
  'use strict';

  var clearDb = require('../../helpers/seeder');


  describe('testing', function() {
    beforeEach(function(done) {
      clearDb.seed(function(ok) {
        expect(ok).toBe('ok');
        done();
      });
    });


    it('expect ok', function(done) {
      expect(1).toEqual(1);
      done();
    });

  });

})();
