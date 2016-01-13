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
      return ( 
        <div>
          <button onClick={this.props.onClick} id={this.props.id} className="waves-effect waves-light btn"> 
            <i className={this.props.icon}></i>
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
        icon: 'fa fa-play'
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
    handleClick: function(e) {
      console.log('clicked');
      console.log(e.target.id);
      if (e.target.id === 'start') {
       console.log(e.target.id);
        this.handleStartClick(e);
      } else if(e.target.id === 'pause') {
        this.handlePauseClick(e);
      } else if(e.target.id === 'resume') {
        this.handleResumeClick(e);
      } else if(e.target.id === 'stop') {
        this.handleStopClick(e);
      }
    },

    handleStartClick: function() {
     e.preventDefault();
     console.log('Triger');
      this.setState({
          description: 'Andela'
        });
      var data = {
        description: this.state.description,
        projectUserId: this.state.projectUserId
      };
      TrackingActions.start(data);
      this.setState({
        btnId: 'pause',
        icon: 'fa fa-pause'
      });
    },

    handlePauseClick: function(e) {
      e.preventDefault();
      console.log('Stop here');
      TrackingActions.pause();
      this.setState({
        btnId: 'resume',
        icon: 'fa fa-play'
      });   
    },

    handleResumeClick: function(e) {
      e.preventDefault();
      TrackingActions.resume();
      this.setState({
        btnId: 'pause',
        icon: 'fa fa-pause'
      });
    },

    handleStopClick: function(e) {
      e.preventDefault();
      TrackingActions.stop();
      this.setState({
        btnId: 'play',
        icon: 'fa fa-play'
      });
    },

    render: function() {
      return ( 
        <div className="row col s12" >
          <Select className="trimeProject col s2" 
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
          <div className="col s4">
              <input name="name" id="name" type="text" className="validate" onChange={this.handleFieldChange} required/>
          </div>
          <div className="col s1"><Button onClick={this.handleClick} id={this.state.btnId} label="Start" icon={this.state.icon} /></div>
          <div className="col s1"><Button onClick={this.handleStopClick} id="stop" label="Stop" icon="fa fa-stop" /></div>
        </div>
      );
    }
  });

  module.exports = TrimePage;

})();
