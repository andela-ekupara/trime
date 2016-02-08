(function() {
  'use strict';

  var React = require('react');

  module.exports = React.createClass({
    render: function() {
      return (
        <button className="btn waves-effect btntrime" id="btn-trime" name="start">
          <a href="/join">Start Triming</a>
        </button>
      );
    }
  });
})();
