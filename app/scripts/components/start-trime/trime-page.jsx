(function() {
  'use strict';
  var React = require('react'),
    Select = require('react-select'),
    TrackingActions = require('../../actions/trackingActions'),
    UserStore = require('../../stores/userStore'),
    TrackingStore = require('../../stores/trackingStore');

  var Button = React.createClass({
    propTypes: {
      className: React.PropTypes.string,
      disabled: React.PropTypes.bool,
      icon: React.PropTypes.string,
      id: React.PropTypes.string,
      onClick: React.PropTypes.func.isRequired
    },

    render: function() {
      return ( 
        <div>
          <button 
              className={this.props.className}
              disabled={this.props.disabled} 
              id={this.props.id} 
              onClick={this.props.onClick} 
          > 
            <i className={this.props.icon}> </i>
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
        description: '',
        btnId: 'start',
        icon: 'fa fa-play',
        status: '',
        enabled: true
      };
    },

    componentWillMount: function() {
      UserStore.addChangeListener(this.getSession);
      TrackingStore.addChangeListener(this.getProjects);
    },

    componentDidMount: function() {
      TrackingStore.addChangeListener(this.showResult);
      TrackingStore.addChangeListener(this.getStatus);
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

    handleSelectChange: function(val) {
      this.setState({
        projectUserId: val
      });
    },

    showResult: function() {
      var result = TrackingStore.getTrack();
      if(result && result.message) {
        window.Materialize.toast(result.message, 2000, 'success-toast');
      } else {
        window.Materialize.toast(result, 2000, 'error-toast');
      }
    },

    getStatus: function() {
      var result = TrackingStore.getTrack();
      if(result && result.status === 'started') {
        this.setState({btnId: 'pause', icon: 'fa fa-pause', enabled: false});
      } else if(result && result.status === 'paused') {
        this.setState({btnId: 'resume', icon: 'fa fa-play'});
      } else if(result && result.status === 'resumed') {
        this.setState({btnId: 'pause', icon: 'fa fa-pause'});
      } else if (result && result.status === 'stopped'){
        this.setState({
          btnId: 'start', 
          icon: 'fa fa-play',
          projectUserId: '',
          enabled: true
        });
      }
    },

    handleClick: function(e) {
      e.preventDefault();
      if (e.target.id === 'start') {
        var data = {
          description: this.state.description,
          projectUserId: this.state.projectUserId
        };
        TrackingActions.start(data);
      } else if(e.target.id === 'pause') {
        TrackingActions.pause(); 
      } else if(e.target.id === 'resume') {
        TrackingActions.resume();
      } else if(e.target.id === 'stop') {
        TrackingActions.stop();
      }
    },

    handleFieldChange: function(e) {
      this.setState({
        description: e.target.value
      });
    },

    render: function() {
      return ( 
        <div className="row col s12" >
          <Select autofocus 
              className="trimeProject col s2" 
              clearable={this.state.clearable}
              labelKey="name"
              onChange={this.handleSelectChange}
              options={this.state.options} 
              searchable={this.state.searchable}
              simpleValue 
              value={this.state.projectUserId}
              valueKey="project_id" 
          />
          <div className="col s4">
              <input className="validate"
                  id="name" 
                  name="name"  
                  onChange={this.handleFieldChange} 
                  required
                  type="text" 
              />
          </div>
          <div className="col s1">
            <Button 
                className="waves-effect waves-light btn" 
                disabled={!this.state.projectUserId} 
                icon={this.state.icon} 
                id={this.state.btnId} 
                label="Start" 
                onClick={this.handleClick} 
            />
          </div>
          <div className="col s1">
            <Button 
                className="waves-effect waves-light btn" 
                disabled={this.state.enabled} 
                icon="fa fa-stop" 
                id="stop" 
                label="Stop" 
                onClick={this.handleClick} 
            />
          </div>
        </div>
      );
    }
  });

  module.exports = TrimePage;

})();
