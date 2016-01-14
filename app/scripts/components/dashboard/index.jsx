(function() {
  'use strict';
  var React = require('react');
  var OrgStore = require('../../Stores/OrgStore');
  var OrgActions = require('../../Actions/OrgActions');
  var OrgsList = require('./OrgsList.jsx');
  var DashBoard = React.createClass({
    getInitialState: function() {
      return {
        orgs: []
      };
    },

    componentDidMount: function() {
      OrgActions.getOrgs();
      OrgStore.addChangeListener(this.populateOrgs);
    },

    populateOrgs: function() {
      var data = OrgStore.getOrgs();
      this.setState({orgs: data});
    },

    render: function() {
      return (
          <div className="container">
            <div className="row">
              <div className="col s12">TRIME DASHBOARD</div>
              <div className="col s12 m4"><h6>ORGANISATIONS</h6></div>
              <div className="col s12 m4 offset-m4">
                <a className="waves-effect waves-light btn" href="/orgs">
                  <i className="material-icons right">send</i>Create Org
                </a></div>
            </div>
            <div className = "row">
              <OrgsList orgs={this.state.orgs}/>
            </div>
          </div>
      );
    }
  });
  module.exports = DashBoard;
})();
