(function() {
  'use strict';

  var Orgs = require('../models').Orgs;
  var Users = require('../models').Users;

  module.exports = {
    // Create an org and add the logged in user as the owner
    create: function(req, res) {
      // The name is required
      if (!req.body.name) {
        return res.status(400)
          .json({
            error: 'The name field cannot be empty'
          });
      } else {
        Orgs.sync().then(function() {
            return Orgs.create({
                name: req.body.name,
                description: req.body.description
              })
              .then(function(org) {
                Users.findById(req.session.user.id)
                  .then(function(user) {
                    user.addOrg(org, {
                        role: 'owner'
                      }).then(function() {
                        res.json(org);
                      })
                      .catch(function(err) {
                        org.destroy().then(function() {
                          res.status(500).json({
                            error: err.message
                          });
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
      }
    },

    // Get all orgs user belongs to
    all: function(req, res) {
        Users.sync().then(function() {
          Users.findById(req.session.user.id)
            .then(function (user) {
              user.getOrgs().then(function(orgs){
                return res.json(orgs);
              });
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    get: function(req, res) {
      Orgs.sync().then(function() {
          return Orgs.findOne({
              where: {
                id: req.params.id
              }
            })
            .then(function(org) {
              if (!org) {
                return res.status(404).json({
                  error: 'Organization Not Found'
                });
              }
              return res.json(org);
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    addUsers: function(req, res) {
      Orgs.sync().then(function() {
          Orgs.findOne({
              where: {
                id: req.params.id
              }
            })
            .then(function(org) {
              if (!org) {
                return res.status(404).json({
                  error: 'Organization Not Found'
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
                  org.addUser(user, {
                      role: req.body.role
                    }).then(function() {
                      return res.json({
                        message: 'User successfully added to Org'
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
      Orgs.sync().then(function() {
          return Orgs.findOne({
              where: {
                id: req.params.id
              }
            })
            .then(function(org) {
              if (!org) {
                return res.status(404).json({
                  error: 'Organization Not Found'
                });
              }
              return org.getUsers().then(function(users) {
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

    update: function(req, res) {
      Orgs.sync().then(function() {
          return Orgs.update(req.body, {
              where: {
                id: req.params.id
              }
            })
            .then(function(org) {
              return res.json(org);
            });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err.message
          });
        });
    },

    delete: function(req, res) {
      Orgs.destroy({
          where: {
            id: req.params.id
          }
        })
        .then(function() {
          return res.status(200).json({
            message: 'Organization deleted successfully'
          });
        })
        .catch(function(err) {
          return res.status(500).json({
            error: err
          });
        });
    }
  };

})();
