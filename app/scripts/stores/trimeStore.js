(function() {
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
    var name;

    switch (action.actionType) {
      case TrimeConstants.ORG_CREATE:
        name = action.name.trim();
        if (name !== '') {
          createOrg(name, description, TrimeStore.emitChange);
        }
        break;
      default:
        // no op
    }
  });
  module.exports = TrimeStore;
})();
