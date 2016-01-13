(function() {
  'use strict';
  var React = require('react');
  var Select = require('react-select');
  var ProjectActions = require('../../actions/ProjectActions');
  var UserActions = require('../../actions/userActions');
  var ProjectStore = require('../../stores/ProjectStore');
  var UserStore = require('../../stores/userStore');

  var ProjectForm = React.createClass({
    getInitialState: function() {
      return {
        name: '',
        description: ''
      };
    },

    componentDidMount: function() {
      ProjectStore.addChangeListener(this.handleUpdate);
    },

    handleUpdate: function() {
      var data = ProjectStore.getProjectResult();
      if(data.error) {
        if(typeof data.error === 'string') {
          window.Materialize.toast(data.error, 2000, 'error-toast');
        }
      } else {
        window.Materialize.toast('Project created successfully!', 2000, 'success-toast');
      }
    },

    handleDescriptionChange: function(e) {
      this.setState({description: e.target.value});
    },

    handleNameChange: function(e) {
      this.setState({name: e.target.value});
    },

    handleSubmit: function(e) {
      e.preventDefault();
      var data = {
        name: this.state.name,
        description: this.state.description,
        orgId: this.props.orgId
      };
      ProjectActions.createProject(data);
    },

    render: function() {
      return (
        <div className="row">
          <form className="col s9" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" name="name" onChange={this.handleNameChange} className="validate" required/>
                <label className="active" htmlFor="name">
                  Project Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" name="description" onChange={this.handleDescriptionChange} className="materialize-textarea" required></textarea>
                <label htmlFor="Description">Description</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Submit
              <i className="material-icons right">send </i>
            </button >
          </form>
        </div>
        );
      }
  });

  module.exports = ProjectForm;

})();
