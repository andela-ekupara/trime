(function() {
  'use strict';

  var Orgs = require('../models').Orgs;
  var Projects = require('../models').Projects;

  module.exports = {
    // Create a project
    create: function(req, res) {
      // The project title is required
      if (req.body.title === '' || req.body.org_id === '') {
        return res.status(400)
          .json({
            error: 'The project title is required'
          });
      } else {
        Projects.sync().then(function() {
          return Projects.create({
              title: req.body.title,
              description: req.body.description,
              org_id: req.body.org_id
            })
            .then(function(project) {
              return res.json(project);
            });
        });
      }
    },

  };
})();
