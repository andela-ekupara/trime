(function() {
  'use strict';
  
  var React = require('react');
  var OrgStore = require('../../stores/OrgStore');
  var OrgActions = require('../../actions/OrgActions');
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
          <div className="container top-padding">
            <div className="row">
              <div className="col s6 m6 teal-text"><h4>DASHBOARD</h4></div>
              <div className="col s6 m6">
                <a className="waves-effect waves-light btn right" href="/orgs">
                  <i className="material-icons right">send</i>
                  Create Org
                </a>
              </div>
            </div>
            <div className="row">
              <h5 className="col s12 m12 grey-text">ORGANISATIONS</h5>
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
