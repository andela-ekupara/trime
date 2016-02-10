(function() {
  'use strict';
  module.exports = function(app) {
    var TimeTracks = require('../controllers/time-tracks');
    var User = require('../controllers/users');

    app.post('/api/time-tracks/start', Users.authenticate, TimeTracks.start);
    app.get('/api/time-tracks/getProjects/:userId', Users.authenticate, TimeTracks.getProjects);
    app.put('/api/time-tracks/pause', Users.authenticate, TimeTracks.pause);
    app.post('/api/time-tracks/resume', Users.authenticate, TimeTracks.resume);
    app.put('/api/time-tracks/stop', Users.authenticate, TimeTracks.stop);

  };

})();
