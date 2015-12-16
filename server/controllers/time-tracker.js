(function() {
  'use strict';

  var TimeTracker = require('../models').TimeTracker;

  module.exports = {
    // 1. get the project id and user id
    // 2. query project_users_id using userId and project_id
    // 3. get the start time from the server
    // 4. save the time and the id to the db;
    create: function(req, res) {
      
      if(!req.body.start_time) {
        return res.status(400).send({message: 'start time cannot be empty'});
      } else {
        TimeTracker.sync().then(function() {
          return TimeTracker.create({

          })
        })
      }
  },

  getProjectUsers: function
})();
