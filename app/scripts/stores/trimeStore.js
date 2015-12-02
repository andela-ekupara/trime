(function() {
  'use strict';

  var AppDispatcher = require('../dispatcher/AppDispatcher'),
    request = require('superagent'),
    EventEmitter = require('events').EventEmitter,
    TrimeConstants = require('../constants/trimeConstants'),
    assign = require('object-assign');

  function createOrg(name, description, callback) {
    request
      .post('/api/orgs')
      .send({
        name: name,
        description: description
      })
      .end(function(err, org) {
        if (!err) {
          callback();
        }
      });
  }

  function login(username, password, callback) {
      request
        .post('/api/users/login')
        .send({
          username: username,
          password: password
        })
        .end(function(err, user) {
          if(err){
            console.log("GERTY" +err);
          }
            callback(user); 
          
        });
  }

  var TrimeStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
      this.emit('change');
    },

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }
  });

  // Register callback to handle all updates
  AppDispatcher.register(function(action) {
    var description, name;

    switch (action.actionType) {
      case TrimeConstants.ORG_CREATE:
        name = action.name.trim();
        description = action.description.trim();
        if (name !== '') {
          createOrg(name, description, TrimeStore.emitChange);
        }
        break;

      case TrimeConstants.USER_LOGIN:
        var username = action.username;
        var password = action.password;
        login(username, password, function(user) {
          console.log(user);
        });
        break;
      default:
        // no op
    }

    return true; // No errors. Needed by promise in Dispatcher.
  });

  module.exports = TrimeStore;

})();
