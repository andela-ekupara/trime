(function() {
  'use strict';

  var TimeTracks = require('../models').TimeTracks;
  var ProjectUsers = require('../models').ProjectUsers;

  module.exports = {
    // 1. get the project_user_id
    // 2. populate the project_trimes table with the desc, project_user_id
    // 3. populate trime-tracks with project_trimes_id and start_time with current time
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
          //console.log('THITHTIHISHIHS:::: ', project_user);
        }).then(function() {
          // get the time from the server
          TimeTracks.findOne({
              where: {
                project_user_id: project_user_id,
                complete: false
              }
            })
            .then(function(time_track) {
              if (time_track) {
                res.status(500).send({
                  error: 'stop the running timer first'
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
                      error: 'could not create time'
                    });
                  }
                  //project_user_id.addTimeTrack(time_track);
                  // save the time_track id on the req obj
                  req.time_track = time_track;
                  res.status(201).send(time_track);
                });
              }
            });
        });
      });
    },

    // 1. get the running project id (tracked project) and time_track id
    // 2. update finishedAt column with current time
    // 3. calculate the tracked time and update the tracked time this far.
    pause: function(req, res) {
      TimeTracks.findOne({
          where: {
            id: req.body.time_track_id,
            complete: false
          }
        })
        .then(function(time_track) {
          // calculate the tracked time this far
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
                  error: 'could not pause time'
                });
              } else {
                res.status(200).send({
                  message: 'paused time successfully'
                });
              }
            });
        });
    },

    // 1. get the running project id (tracked project)
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
              error: 'could not resume'
            });
          } else {
            res.status(200).send({
              message: 'resumed successfully'
            });
          }
        });
    },

    // 1. get the running project id (tracked project) and time-track id
    // 2. update the finishedAt time with the current server time
    // 3. update the tracked time this far
    // 4. update the complete to true in project-trimes table
    stop: function(req, res) {
      TimeTracks.findOne({
        where: {
          id: req.time_track.id,
          complete: false
        }
      }).then(function(time_track) {
        // check if it was tracking or not
        if (time_track.tracking_flag) {
          // update the time track using stop_time
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
                error: 'could not stop tracking'
              });
            } else {
              res.status(200).send({
                message: 'tracking stopped successfully'
              });
            }
          });
        } else {
          // update the time_tracked using pause_time
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
                  error: 'could not stop tracking'
                });
              } else {
                res.status(200).send({
                  message: 'tracking stopped successfully'
                });
              }
            });
        }
      });
    }
  };

})();
