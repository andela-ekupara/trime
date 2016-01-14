(function() {
  'use strict';
  var React = require('react'),
    Select = require('react-select'),
    TrackingActions = require('../../actions/trackingActions'),
    UserActions = require('../../actions/UserActions'),
    UserStore = require('../../stores/UserStore'),
    TrackingStore = require('../../stores/TrackingStore');
 
  var Button = React.createClass({
    render: function() {
      return ( 
        <div>
          <button onClick={this.props.onClick} id={this.props.id} className="waves-effect waves-light btn"> 
            {this.props.label} <i className={this.props.icon}></i> 
          </button>
        </div>
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

    componentDidMount: function() {
      TrackingStore.addChangeListener(this.showResult);
    },

    getSession: function() {
      var user = UserStore.getData();
      if (user.id) {
        TrackingActions.getProjects(user.id);
      }
    },

    getProjects: function() {
      var projects = TrackingStore.getProjects();
      this.setState({
        options: projects
      });
    },

    logChange: function(val) {
      console.log('selected ' + val);
      this.setState({
        projectUserId: val
      });
    },

    showResult: function() {
      var result = TrackingStore.getTrack();
      if(result.message) {
        window.Materialize.toast(result.message, 2000, 'success-toast');
      }
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

    handlePauseClick: function(e) {
      e.preventDefault();
      TrackingActions.pause();    
    },

    handleResumeClick: function(e) {
      e.preventDefault();
      TrackingActions.resume();
    },

    handleStopClick: function(e) {
      e.preventDefault();
      TrackingActions.stop();
    },

    render: function() {
      return ( <div className="select" >
        <Select className="trimeProject" 
          autofocus 
          options={this.state.options} 
          simpleValue 
          disabled={this.state.disabled}
          searchable={this.state.searchable}
          clearable={this.state.clearable}
          onChange={this.logChange}
          labelKey="name"
          valueKey="project_id" 
        />

        <Button onClick={this.handleStartClick} id="start" label="Start" icon="fa fa-play" />
        <Button onClick={this.handleResumeClick} id="pause" label="resume" icon="fa fa-play" />
        <Button onClick={this.handlePauseClick} id="resume" label="pause" icon="fa fa-play" />
        <Button onClick={this.handleStopClick} id="stop" label="Stop" icon="fa fa-stop" />
        </div>
      );
    }
  });

  module.exports = TrimePage;

})();
