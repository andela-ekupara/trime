(function() {
  'use strict';
  // require the database connection
  var sequelize = require('../config/db-connect');

  // Utility function to convert the filenames into Model names
  function ucModels(name) {
    // Uppercase the first element and
    // any other element that follows a hyphen then remove the hyphen
    return name.replace(/^[a-z]|\-\w/g, function(match) {
      return match.substr(-1).toUpperCase();
    });
  }

  // holds the model filenames
  var models = [
    'orgs',
    'org-users',
    'projects',
    'project-users',
    'users',
    'time-tracks',
    'project-trimes'
  ];

  // add all models to the exports
  // Can now be imported through `require('models').ModelName`
  models.forEach(function(model) {
    // sequelize.import loads already created models
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
    m.ProjectTrimes.belongsTo(m.ProjectUsers);
    m.ProjectTrimes.hasMany(m.TimeTracks);
  })(module.exports);

  // export connection
  module.exports.sequelize = sequelize;
})();
