(function() {
  'use strict';

  var TimeTracks = require('../models').TimeTracks;
  var ProjectUsers = require('../models').ProjectUsers;

  module.exports = {
    // 1. Get the project_user_id
    // 2. Populate the project_trimes table with the desc, project_user_id
    // 3. Populate trime-tracks with project_trimes_id and start_time with current time
    start: function(req, res) {
      var project_user_id = null;
      TimeTracks.sync().then(function() {
        ProjectUsers.findOne({
          where: {
            project_id: req.body.id,
            user_id: req.body.user_id
          }
        }).then(function(project_user) {

          if (!project_user) {
            return res.status(404).send({
              error: 'No project found'
            });
          }
          project_user_id = project_user.id;
        }).then(function() {
          // Get the time from the server
          TimeTracks.findOne({
              where: {
                project_user_id: project_user_id,
                complete: false
              }
            })
            .then(function(time_track) {
              if (time_track) {
                res.status(500).send({
                  error: 'Stop the running timer first'
                });
              } else {
                TimeTracks.create({
                  start_time: new Date(),
                  tracking_flag: true,
                  complete: false,
                  description: req.body.description,
                  project_user_id: project_user_id
                }).then(function(time_track) {

                  if (!time_track) {
                    return res.status(404).send({
                      error: 'Could not create time'
                    });
                  }
                  // Project_user_id.addTimeTrack(time_track);
                  // Save the time_track id on the req obj
                  req.time_track = time_track;
                  res.status(201).send(time_track);
                });
              }
            });
        });
      });
    },

    // 1. Get the running project id (tracked project) and time_track id
    // 2. Update finishedAt column with current time
    // 3. Calculate the tracked time and update the tracked time this far.
    pause: function(req, res) {
      TimeTracks.findOne({
          where: {
            id: req.body.time_track_id,
            complete: false
          }
        })
        .then(function(time_track) {
          // Calculate the tracked time this far
          var pause_time = new Date();
          var tracked_time = (time_track.time_tracked + (pause_time - time_track.start_time));

          TimeTracks.update({
              pause_time: pause_time,
              time_tracked: tracked_time,
              tracking_flag: false,
              complete: false
            }, {
              where: {
                id: req.body.time_track_id,
                complete: false
              }
            })
            .then(function(err) {
              if (err) {
                res.status(500).send({
                  error: 'Could not pause time'
                });
              } else {
                res.status(200).send({
                  message: 'Paused time successfully'
                });
              }
            });
        });
    },

    // 1. Get the running project id (tracked project)
    // 2. (create new row) populate trime-tracks with project_trimes_id and start_time with current time
    resume: function(req, res) {
      TimeTracks.update({
          start_time: new Date().toLocaleString,
          tracking_flag: true,
          complete: false
        }, {
          where: {
            id: req.time_track.id,
            complete: false
          }
        })
        .then(function(err) {
          if (err) {
            res.status(500).send({
              error: 'Could not resume'
            });
          } else {
            res.status(200).send({
              message: 'Resumed successfully'
            });
          }
        });
    },

    // 1. Get the running project id (tracked project) and time-track id
    // 2. Update the finishedAt time with the current server time
    // 3. Update the tracked time this far
    // 4. Update the complete to true in project-trimes table
    stop: function(req, res) {
      TimeTracks.findOne({
        where: {
          id: req.time_track.id,
          complete: false
        }
      }).then(function(time_track) {
        // Check if it was tracking or not
        if (time_track.tracking_flag) {
          // Update the time track using stop_time
          var tracked_time = time_track.time_tracked + (new Date() - time_track.start_time);
          TimeTracks.update({
            stop_time: new Date().toLocaleString,
            time_tracked: tracked_time,
            tracking_flag: false,
            complete: true
          }, {
            where: {
              id: req.time_track.id,
              complete: false,
              tracking_flag: true
            }
          }).then(function(err) {
            if (err) {
              res.status(500).send({
                error: 'Could not stop tracking'
              });
            } else {
              res.status(200).send({
                message: 'Tracking stopped successfully'
              });
            }
          });
        } else {
          // Update the time_tracked using pause_time
          var time_tracked = time_track.time_tracked + (time_track.pause_time - time_track.start_time);
          TimeTracks.update({
              stop_time: new Date().toLocaleString,
              time_tracked: time_tracked,
              tracking_flag: false,
              complete: true
            }, {
              where: {
                id: req.time_track.id,
                complete: false,
                tracking_flag: false
              }
            })
            .then(function(err) {
              if (err) {
                res.status(500).send({
                  error: 'Could not stop tracking'
                });
              } else {
                res.status(200).send({
                  message: 'Tracking stopped successfully'
                });
              }
            });
        }
      });
    }
  };

})();
