(function() {
  "use strict";
  module.exports = function(passport) {
    require("./local-auth")(passport);
  };
})();
