(function() {
  "use strict";
  var User = require('../models/users'),
    passport = require('passport'),
    bcrypt = require('bcrypt-nodejs');

  module.exports = {
    signup: function(req, res) {
      User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      }).then(function(user) {
        return res.status(201).json(user);
      }).catch(function(err) {
        return res.status(500).send({
          error: err.errors[0].message || err.message
        });
      });
    }
  };
})();
