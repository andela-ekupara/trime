(function() {
  'use strict';

  var Orgs = require('../models/orgs');

  module.exports = {
    // Create an org
    create: function(req, res) {
      // The name is required
      if (req.body.name === '') {
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
                return res.json(org);
              });
          })
          .catch(function(err) {
            return res.status(500).json({
              error: err.message
            });
          });
      }
    },

    // Get all orgs
    // TODO: Should get only orgs a user belongs to
    all: function(req, res) {
      Orgs.sync().then(function() {
          return Orgs.findAll()
            .then(function(orgs) {
              return res.json(orgs);
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
                  error: "Organization Not Found"
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
    }
  };

})();
