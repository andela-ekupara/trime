(function() {
  'use strict';

  var EventEmitter = require('events').EventEmitter;
  var assign = require('object-assign');

  var BaseStore = assign({}, EventEmitter.prototype, {
    data: null,
    error: null,
    setData: function(data) {
      this.data = data;
      this.emitChange();
    },
    getData: function() {
      return this.data;
    },
    setError: function(data) {
      this.error = data;
      this.emitChange();
    },
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

  module.exports = BaseStore;

})();
