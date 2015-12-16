(function() {
  'use strict';
  var React = require('react');
  var OrgForm = require('./OrgForm.jsx');

  module.exports = React.createClass({
    render: function() {
      return (
        <div>
          <OrgForm />
        </div>
      );
    }
  });

})();
