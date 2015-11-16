(function() {
  'use strict';
  module.exports = function(passport, config) {
    require('./local-auth')(passport);
    require('./github-auth')(passport, config);
  };
})();
