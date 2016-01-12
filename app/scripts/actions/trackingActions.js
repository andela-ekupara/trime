(function() {
  'use strict';

  var TrimeConstants = require('../constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    getProjects: function(userId) {
      BaseActions.get('/api/time-tracks/getProjects/' + userId, TrimeConstants.GET_PROJECTS);
    },
    start: function(data) {
    	console.log('Sfafdafafasfas')
    	BaseActions.post('/api/time-tracks/start', data, TrimeConstants.START);
    },
    pause: function(data) {
    	BaseActions.put('/api/time-tracks/pause', data, TrimeConstants.PAUSE);
    },
    resume: function(data) {
    	BaseActions.post('/api/time-tracks/resume', data, TrimeConstants.RESUME);
    },
    stop: function(data) {
    	BaseActions.put('/api/time-tracks/stop', data, TrimeConstants.STOP);
    }
  };
})();
