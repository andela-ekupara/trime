(function() {
  'use strict';

  var timeTracks = require('../models').TimeTracks;
  var projectTrimes = require('../models').ProjectTrimes;
  var sequelize = require('../config/db-connect');

  module.exports = {
    getProjects: function(req, res) {
      sequelize.query('SELECT project_users.project_id, ' +
          'projects.name, projects.description ' +
          'FROM project_users ' +
          'INNER JOIN projects ON project_users.project_id = projects.id ' +
          'AND project_users.user_id = ' + req.params.userId)
        .spread(function(result) {
          if (result.length === 0) {
            res.status(404).send({
              error: 'No projects found'
            });
          } else {
            res.status(200).send(result);
          }
        })
        .catch(function(err) {
          res.status(500).send({
            error: err.errormsg
          });
        });
    },

    start: function(req, res) {
      projectTrimes.sync().then(function() {
        return projectTrimes.create({
            description: req.body.description,
            projectUserId: req.body.projectUserId
          })
          .then(function(projectTrime) {
            if (!projectTrime) {
              res.status(500).send({
                error: 'Could not start tracking'
              });
            } else {
              timeTracks.sync({
                force: true
              }).then(function() {
                return timeTracks.create({
                    startedAt: Date.now(),
                    project_trime_id: projectTrime.dataValues.id
                  }).then(function(timeTrack) {
                    if (!timeTrack) {
                      return res.status(500).send({
                        error: 'Could not start Triming'
                      });
                    } else {
                      req.session.track = {
                        projectTrimeId: projectTrime.dataValues.id,
                        timeTrackId: timeTrack.id
                      };
                      return res.status(200).send({
                        message: 'Timer started',
                        status: 'started'
                      });
                    }
                  })
                  .catch(function(err) {
                    return res.status(500).send({
                      error: err.errormsg
                    });
                  });
              });
            }
          });
      });
    },

    pause: function(req, res) {
      timeTracks.update({
          finishedAt: Date.now()
        }, {
          where: {
            id: req.session.track.timeTrackId
          }
        })
        .then(function(ok) {
          if (ok) {
            delete req.session.track.timeTrackId;
            return res.status(200).send({
              message: 'Paused time successfully',
              status: 'paused'
            });
          } else {
            return res.status(500).send({
              error: 'Could not pause time'
            });
          }
        })
        .catch(function(err) {
          res.status(500).send({
            error: err.errormsg
          });
        });
    },

    resume: function(req, res) {
      timeTracks.create({
          startedAt: Date.now(),
          // project_trime_id: req.body.ProjectTrimeId
          project_trime_id: req.session.track.projectTrimeId
        })
        .then(function(timeTrack) {
          if (!timeTrack) {
            return res.status(500).send({
              error: 'Could not resume Triming'
            });
          } else {
            req.session.track.timeTrackId = timeTrack.id;
            return res.status(200).send({
              message: 'Resumed successfully',
              status: 'resumed'
            });
          }
        })
        .catch(function(err) {
          return res.status(500).send({
            error: err.errormsg
          });
        });
    },

    stop: function(req, res) {
      var update = function() {
        projectTrimes.update({
            complete: true
          }, {
            where: {
              id: req.session.track.projectTrimeId
            }
          })
          .then(function(ok) {
            if (ok) {
              delete req.session.track;
              return res.status(200).send({
                message: 'Track was Successfully completed',
                status: 'stopped'
              });
            } else {
              return res.status(500).send({
                error: 'Could not stop time'
              });
            }
          })
          .catch(function(err) {
            res.status(500).send({
              error: err.errormsg
            });
          });
      };

      if (req.session.track.timeTrackId) {
        timeTracks.update({
            finishedAt: Date.now()
          }, {
            where: {
              id: req.session.track.timeTrackId
            }
          })
          .then(function(ok) {
            if (ok) {
              update();
            } else {
              res.status(500).send({
                error: 'Could not stop tracking'
              });
            }
          })
          .catch(function(err) {
            res.status(500).send({
              error: err.errormsg
            });
          });
      } else {
        update();
      }
    }
  };

})();
