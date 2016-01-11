(function() {
  'use strict';

  var TrimeConstants = require('../constants/TrimeConstants'),
    BaseActions = require('./BaseActions');

  module.exports = {
    getProjects: function(userId) {
      BaseActions.get('/api/time-tracks/getProjects/' + userId, TrimeConstants.GET_PROJECTS);
    }
  };
})();
