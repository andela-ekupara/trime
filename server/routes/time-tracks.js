(function() {
  'use strict';
  module.exports = function(app) {
    var TimeTracks = require('../controllers/time-tracks');

    app.post('/api/time-tracks/start', TimeTracks.start);
    app.get('/api/time-tracks/getProjects/:userId', TimeTracks.getProjects);
    app.put('/api/time-tracks/pause', TimeTracks.pause);
    app.post('/api/time-tracks/resume', TimeTracks.resume);
    app.put('/api/time-tracks/stop', TimeTracks.stop);

  };

})();
