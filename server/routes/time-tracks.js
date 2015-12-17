(function() {
  'use strict';
  module.exports = function(app) {
    var TimeTracks = require('../controllers/time-tracks');

    app.post('/api/time-tracks/start', TimeTracks.start);
    app.put('/api/time-tracks/pause', TimeTracks.pause);
    app.put('/api/time-tracks/resume', TimeTracks.resume);
    app.put('/api/time-tracks/stop', TimeTracks.stop);

  };

})();
