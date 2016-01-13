(function() {
  'use strict';
  var React = require('react');
  var OrgsList = React.createClass({
      render: function() {
        var renderOrg = function(org) {
          return (
            <div className="col s12 m4" key={org.id}>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{org.name}</span>
                  <p>{org.description}</p>
                </div>
                <div className="card-action">
                  <a href={'/orgs/' + org.id}> Projects</a>
                  <a href={'/orgs/' + org.id + '/users' }> Manage Users</a>
                </div>
              </div>
            </div>
          );
        };
        return (<div>{this.props.orgs.slice(0,3).map(renderOrg)}</div>)
      }
});
  module.exports = OrgsList;
})();
