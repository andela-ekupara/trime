(function() {
  'use strict';

  var EventEmitter = require('events').EventEmitter;
  var assign = require('object-assign');

  var BaseStore = assign({}, EventEmitter.prototype, {
      data: null,
      setData: function(data, event) {
        this.data = data;
        this.emitChange(event);
      },

      getData: function() {
        return this.data;
      },

      emitChange: function(event) {
        if (event) {
          this.emit(event);
        } else {
          this.emit('change');
        }
      },

      addChangeListener: function(callback, event) {
        if (event) {
          this.on(event, callback);
        } else {
          this.on('change', callback);
        }
      },

      removeChangeListener: function(callback, event) {
        if (event) {
          this.removeListener(event, callback);
        } else {
          this.removeListener('change', callback);
        }
      }
  });

  module.exports = BaseStore;

})();
