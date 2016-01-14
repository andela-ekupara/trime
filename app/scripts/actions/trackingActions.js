(function() {
  'use strict';

  var TrimeConstants = require('../Constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    getProjects: function(userId) {
      BaseActions.get('/api/time-tracks/getProjects/' + userId, TrimeConstants.GET_PROJECTS);
    },
    start: function(data) {
      BaseActions.post('/api/time-tracks/start', data, TrimeConstants.START);
    },
    pause: function() {
      BaseActions.put('/api/time-tracks/pause', null, TrimeConstants.PAUSE);
    },
    resume: function() {
      BaseActions.post('/api/time-tracks/resume', null, TrimeConstants.RESUME);
    },
    stop: function(data) {
      BaseActions.put('/api/time-tracks/stop', data, TrimeConstants.STOP);
    }
  };
})();
