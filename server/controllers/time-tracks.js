(function() {
  'use strict';

  var TimeTracks = require('../models').TimeTracks;
  var ProjectTrimes = require('../models').ProjectTrimes;

  module.exports = {
    start: function(req, res) {
      ProjectTrimes.sync().then(function() {
        return ProjectTrimes.create({
            description: req.body.description,
            projectUserId: req.body.projectUserId
          })
          .then(function(projectTrimes) {
            if (!projectTrimes) {
              res.status(500).send({
                error: 'Could not start tracking'
              });
            } else {
              TimeTracks.sync().then(function() {
                return TimeTracks.create({
                  startedAt: Date.now(),
                  project_trime_id: projectTrimes.id
                }).then(function(TimeTracks) {
                  if (!TimeTracks) {
                    return res.status(500).send({
                      error: 'could not start trimmming'
                    });
                  } else {
                    res.session.ProjectTrimeId = projectTrimes.id;
                    res.session.TimeTrackId = TimeTracks.id;
                    return res.status(200).send({
                      message: 'Timer started'
                    });
                  }
                });
              });
            }
          });
      });
    },

    pause: function(req, res) {
      TimeTracks.update({
          finishedAt: Date.now()
        }, {
          where: {
            id: res.session.TimeTrackId
          }
        })
        .then(function(err) {
          if (err) {
            return res.status(500).send({
              error: err
            });
          } else {
            return res.status(200).send({
              message: 'Paused time successfully'
            });
          }
        });
    },

    resume: function(req, res) {
      TimeTracks.create({
          startedAt: Date.now(),
          project_trime_id: res.session.ProjectTrimeId
        })
        .then(function(TimeTrack) {
          if (!TimeTrack) {
            return res.status(500).send({
              error: 'Could not resume trimming'
            });
          } else {
            res.session.TimeTrackId = TimeTrack.id;
            return res.status(200).send({
              message: 'resumed successfully'
            });
          }
        });
    },

    stop: function(req, res) {
      TimeTracks.update({
          finishedAt: Date.now()
        }, {
          where: {
            id: res.session.TimeTrackId
          }
        })
        .then(function(err) {
          if (err) {
            return res.status(500).send({
              error: err
            });
          } else {
            ProjectTrimes.update({
                complete: true
              }, {
                where: {
                  id: res.session.ProjectTrimeId
                }
              })
              .then(function(err) {
                if (err) {
                  return res.status(500).send({
                    error: err
                  });
                } else {
                  res.session.ProjectTrimeId = null;
                  res.session.TimeTrackId = null;
                  return res.status(200).send({
                    message: 'Track was successful'
                  });
                }
              });
          }
        });
    }
  };

})();
