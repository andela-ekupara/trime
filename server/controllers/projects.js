(function() {
  'use strict';

  var Projects = require('../models').Projects;
  var Users = require('../models').Users;

  module.exports = {
    // Create a project
    create: function(req, res) {
      // The project title is required
      if (!req.body.name || !req.params.org_id) {
        return res.status(400)
          .json({
            error: 'The project name is required'
          });
      } else {
        Projects.sync().then(function() {
          return Projects.create({
              name: req.body.name,
              description: req.body.description,
              org_id: req.params.org_id
            })
            .then(function(project) {
              Users.findById(req.session.user.id)
                .then(function(user) {
                  user.addProject(project, {
                      role: 'owner'
                    }).then(function() {
                      res.json(project);
                    })
                    .catch(function(err) {
                      project.destroy().then(function() {
                        res.status(500).json({
                          error: err.message
                        });
                      });
                    });
                });
            });
        });
      }
    },

    addUsers: function(req, res) {
      Projects.sync().then(function() {
          Projects.findOne({
              where: {
                id: req.params.project_id
              }
            })
            .then(function(project) {
              if (!project) {
                return res.status(404).json({
                  error: 'Project Not Found'
                });
              }
              Users.findOne({
                  where: {
                    id: req.body.userId
                  }
                })
                .then(function(user) {
                  if (!user) {
                    return res.status(404).json({
                      error: 'User Not Found'
                    });
                  }
                  project.addUser(user, {
                      role: req.body.role
                    }).then(function() {
                      return res.json({
                        message: 'User successfully added to Project'
                      });
                    })
                    .catch(function(err) {
                      return res.status(500).json({
                        error: err
                      });
                    });
                });
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    getUsers: function(req, res) {
      Projects.sync().then(function() {
          return Projects.findOne({
              where: {
                id: req.params.project_id
              }
            })
            .then(function(project) {
              if (!project) {
                return res.status(404).json({
                  error: 'Project Not Found'
                });
              }
              return project.getUsers().then(function(users) {
                return res.json(users);
              });
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },


    all: function(req, res) {
      Projects.sync().then(function() {
          return Projects.findAll({
              where: {
                org_id: req.params.org_id
              }
            })
            .then(function(projects) {
              return res.json(projects);
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    get: function(req, res) {
      Projects.sync().then(function() {
          return Projects.findOne({
              where: {
                id: req.params.project_id
              }
            })
            .then(function(project) {
              if (!project) {
                return res.status(404).json({
                  error: 'Project Not Found'
                });
              }
              return res.json(project);
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    // TODO: only authorized users should update
    update: function(req, res) {
      Projects.sync().then(function() {
          Projects.update(req.body, {
              where: {
                id: req.params.project_id
              }
            })
            .then(function(err) {
              if (err) {
                res.status(500).json({
                  error: 'Could not update project'
                });
              } else {
                res.json({
                  message: 'Project has been updated.'
                });
              }
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    delete: function(req, res) {
      Projects.destroy({
          where: {
            id: req.params.project_id
          }
        })
        .then(function() {
          res.status(200).json({
            message: 'Project deleted successfully'
          });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    }
  };
})();
