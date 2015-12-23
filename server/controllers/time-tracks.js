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
              TimeTracks.sync({force: true}).then(function() {
                return TimeTracks.create({
                  startedAt: Date.now(),
                  project_trime_id: projectTrimes.dataValues.id
                }).then(function(TimeTracks) {
                  if (!TimeTracks) {
                    return res.status(500).send({
                      error: 'could not start trimmming'
                    });
                  } else {
                    res.session.ProjectTrimeId = projectTrimes.dataValues.id;
                    res.session.TimeTrackId = TimeTracks.id;
                    return res.status(200).send({
                      message: 'Timer started'
                    });
                  }
                })
                .catch(function(err) {
                  return res.status(500).send(err);
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
            // id: req.body.timetrackId
            id: res.session.TimeTrackId
          }
        })
        .then(function(ok) {
          if (ok) {
            return res.status(200).send({
              message: 'Paused time successfully'
            });
          } else {
            return res.status(500).send({
              error: 'Could not pause time'
            });
          }
        })
        .catch(function(err) {
          res.status(500).send(err);
        });
    },

    resume: function(req, res) {
      TimeTracks.create({
          startedAt: Date.now(),
          // project_trime_id: req.body.ProjectTrimeId
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
        })
        .catch(function(err) {
          return res.status(500).send({
            error: err
          });
        });
    },

    stop: function(req, res) {
      TimeTracks.update({
          finishedAt: Date.now()
        }, {
          where: {
            // id: req.body.timetrackId
            id: res.session.TimeTrackId
          }
        })
        .then(function(ok) {
          if(ok) {
            ProjectTrimes.update({
                complete: true
              }, {
                where: {
                  // id: req.body.ProjectTrimeId
                  id: res.session.ProjectTrimeId
                }
              })
              .then(function(ok) {
                if(ok) {
                  res.session.ProjectTrimeId = null;
                  res.session.TimeTrackId = null;
                  return res.status(200).send({
                    message: 'Track was successful'
                  });
                } else {
                  return res.status(500).send({
                    error: 'Could not stop time'
                  });
                }
              });
          } else {
            res.status(500).send({
              error: 'could not stop tracking'
            });
          }
        })
        .catch(function(err) {
          res.status(500).send({
            error: 'sequelize error'
          });
        });
    }
  };

})();
