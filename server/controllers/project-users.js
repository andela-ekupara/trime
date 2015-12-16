(function() {
  'use strict';

  var ProjectUsers = require('../models').ProjectUsers;
  module.exports = {
    get: function(req, res) {
      ProjectUsers.sync().then(function() {
          return ProjectUsers.findOne({
            where: {
              project_id: req.body.id,
              user_id: req.session.id
            }
          }).then(function(project_user) {
            if (!project_user) {
              return res.status(404).json({
                error: 'project users not found'
              });
            }
            return res.json(project_user);
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
