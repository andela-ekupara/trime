(function() {
  'use strict';
  // Require the database connection
  var sequelize = require('../config/db-connect');

  // Utility function to convert the filenames into Model names
  function ucModels(name) {
    // Uppercase the first element and
    // any other element that follows a hyphen then remove the hyphen
    return name.replace(/^[a-z]|\-\w/g, function(match) {
      return match.substr(-1).toUpperCase();
    });
  }

  // Holds the model filenames
  var models = [
    'users',
    'projects',
    'orgs',
    'org-users',
    'project-users',
    'project-trimes',
    'time-tracks'
  ];

  // Add all models to the exports
  // Can now be imported through `require('models').ModelName`
  models.forEach(function(model) {
    // Sequelize.import loads already created models
    module.exports[ucModels(model)] = sequelize.import(__dirname + '/' +
      model);
  });

  // Declare the relationships between models
  (function(m) {
    m.Users.belongsToMany(m.Orgs, {
      through: m.OrgUsers
    });
    m.Orgs.belongsToMany(m.Users, {
      through: m.OrgUsers
    });
    m.Orgs.hasMany(m.Projects);
    m.Projects.belongsTo(m.Orgs);
    m.Projects.belongsToMany(m.Users, {
      through: m.ProjectUsers
    });
    m.Users.belongsToMany(m.Projects, {
      through: m.ProjectUsers
    });
    // m.TimeTracks.belongsTo(m.ProjectUsers);
    m.ProjectUsers.hasMany(m.ProjectTrimes);
    m.ProjectTrimes.hasMany(m.TimeTracks);
  })(module.exports);

  // Export connection
  module.exports.sequelize = sequelize;
})();
