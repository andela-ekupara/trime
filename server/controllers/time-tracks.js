(function() {
  'use strict';

  var timeTracks = require('../models').TimeTracks;
  var projectTrimes = require('../models').ProjectTrimes;
  var projectUsers = require('../models').ProjectUsers;
  var projects = require('../models').Projects;

  module.exports = {
    getProjects: function(req, res) {
      // get project from project_users
      projectUsers.sync().then(function() {
          return projectUsers.findAll({
              where: {
                // user_id: req.session.user_id,
                user_id: req.params.userId
              }
            })
            .then(function(project_users) {
              if (!project_users) {
                res.status(404).send({
                  error: 'Projects not found'
                });
              } else {
                var pro = [];
                project_users.forEach(function(element) {
                  projects.findOne({
                      where: {
                        id: element.project_id
                      }
                    })
                    .then(function(project) {
                      pro.push(project.dataValues);
                    })
                    .catch(function(err) {
                      res.status(500).send({
                        error: err.message
                      });
                    });
                });
                return pro;
              }
            })
            .then(function(pro) {
              return res.status(200).send(pro);
            });
        })
        .catch(function(err) {
          res.status(500).send({
            error: err.message
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
                      res.session.projectTrimeId = projectTrime.dataValues.id;
                      res.session.timeTrackId = timeTrack.id;
                      return res.status(200).send({
                        message: 'Timer started'
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
            id: res.session.timeTrackId
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
          res.status(500).send({
            error: err.errormsg
          });
        });
    },

    resume: function(req, res) {
      timeTracks.create({
          startedAt: Date.now(),
          // project_trime_id: req.body.ProjectTrimeId
          project_trime_id: res.session.projectTrimeId
        })
        .then(function(timeTrack) {
          if (!timeTrack) {
            return res.status(500).send({
              error: 'Could not resume Triming'
            });
          } else {
            res.session.timeTrackId = timeTrack.id;
            return res.status(200).send({
              message: 'Resumed successfully'
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
      timeTracks.update({
          finishedAt: Date.now()
        }, {
          where: {
            id: res.session.timeTrackId
          }
        })
        .then(function(ok) {
          if (ok) {
            projectTrimes.update({
                complete: true
              }, {
                where: {
                  id: res.session.projectTrimeId
                }
              })
              .then(function(ok) {
                if (ok) {
                  res.session.projectTrimeId = null;
                  res.session.timeTrackId = null;
                  return res.status(200).send({
                    message: 'Track was Successful'
                  });
                } else {
                  return res.status(500).send({
                    error: 'Could not stop time'
                  });
                }
              });
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
    }
  };

})();
