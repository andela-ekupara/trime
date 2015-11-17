(function() {
  'use strict';

  var Orgs = require('../models/orgs');

  module.exports = {
    create: function(req, res) {
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
              })
          })
          .catch(function(err) {
            return res.status(500).json({
              error: err.message
            });
          });
      }
    }
  };
})();
