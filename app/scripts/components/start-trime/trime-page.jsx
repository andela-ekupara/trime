(function() {
  'use strict';
  var React = require('react'),
    Select = require('react-select'),
    TrackingActions = require('../../actions/trackingActions.js'),
    UserActions = require('../../actions/userActions'),
    UserStore = require('../../stores/userStore'),
    TrackingStore = require('../../stores/trackingStore');

  var Button = React.createClass({
    render: function() {
      return (
        <div>
          <button className="waves-effect waves-light btn">{this.props.label}
            <i className={this.props.icon}></i>
          </button>
        </div>
      );
    }
  });

  var TrimePage = React.createClass({
    getInitialState: function() {
      return {disabled: false, searchable: true, clearable: true, options: []};
    },

    componentWillMount: function() {
      UserStore.addChangeListener(this.getSession);
      TrackingStore.addChangeListener(this.getProjects);
    },

    getSession: function() {
      var user = UserStore.getData();
      if (user.id) {
        TrackingActions.getProjects(user.id);
      }
    },

    getProjects: function() {
      var projects = TrackingStore.getData();
      this.setState({options: projects});
    },

    logChange: function(val) {
      console.log('selected ' + val);
    },

    render: function() {
      return (
        <div className="gerty">
          <Select className="trimeProject" multi={true} autofocus options={this.state.options} simpleValue disabled={this.state.disabled} searchable={this.state.searchable} clearable={this.state.clearable} onChange={this.logChange} labelKey="name" valueKey="project_id"/>

          <Button label="Start" icon="fa fa-play"/>
          <Button label="resume" icon="fa fa-play"/>
          <Button label="pause" icon="fa fa-play"/>
          <Button label="Stop" icon="fa fa-stop"/>
        </div>
      );
    }
  });

  module.exports = TrimePage;

})();
