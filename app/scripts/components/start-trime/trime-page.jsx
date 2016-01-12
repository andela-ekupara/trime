(function() {
  'use strict';
  var React = require('react'),
    Select = require('react-select'),
    TrackingActions = require('../../actions/trackingActions'),
    UserActions = require('../../actions/userActions'),
    UserStore = require('../../stores/userStore'),
    TrackingStore = require('../../stores/trackingStore');
 
  var Button = React.createClass({
    render: function() {
      return ( <div>
        <button onClick = {
          this.props.onClick
        }
        id = {
          this.props.id
        }
        className = "waves-effect waves-light btn" > {
          this.props.label
        } <i className = {
          this.props.icon
        } > </i> </button> </div>
      );
    }
  });

  var TrimePage = React.createClass({
    getInitialState: function() {
      return {
        disabled: false,
        searchable: true,
        clearable: true,
        options: [],
        projectUserId: '',
        description: ''
      };
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
      this.setState({
        options: projects
      });
      console.log('PROJECTS', projects);
    },

    logChange: function(val) {
      console.log('selected ' + val);
      this.setState({
        projectUserId: val
      });
    },

    componentDidMount: function() {
      TrackingStore.addChangeListener(this.showResult);
    },

    showResult: function() {
      var result = TrackingStore.getData();
      console.log('Result',result);
    },

    handleStartClick: function(e) {
      e.preventDefault();
      this.setState({
          description: 'Andela'
        });
      var data = {
        description: this.state.description,
        projectUserId: this.state.projectUserId
      };
      TrackingActions.start(data);
    },

    render: function() {
      return ( <div className = "select" >
        <Select className = "trimeProject" autofocus options = {this.state.options} 
          simpleValue disabled={this.state.disabled}
        searchable = {
          this.state.searchable
        }
        clearable = {
          this.state.clearable
        }
        onChange = {
          this.logChange
        }
        labelKey = "name"
        valueKey = "project_id" />

        <Button onClick = {this.handleStartClick} id = "start" label = "Start" icon = "fa fa-play" />
        <Button id = "pause" label = "resume" icon = "fa fa-play" />
        <Button id = "resume" label = "pause" icon = "fa fa-play" />
        <Button id = "stop" label = "Stop" icon = "fa fa-stop" />
        </div>
      );
    }
  });

  module.exports = TrimePage;

})();
