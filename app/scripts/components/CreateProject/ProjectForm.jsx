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
        description: '',
        result: '',
        options: [],
        searchable: true,
        value: []
      };
    },

    componentDidMount: function() {
      ProjectStore.addChangeListener(this.handleUpdate);
      UserStore.addChangeListener(this.handleUsersChange);
    },

    handleUpdate: function() {
      var data = ProjectStore.getData();
      if (data.error) {
        this.setState({result: 'Error Creating the Project!'});
      } else {
        this.setState({result: 'Successfully created the Project'});
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
      ProjectActions.createProject(this.state.name, this.state.description);
    },

    handleSelectChange: function(value) {
      this.setState({ value: value });
    },

    handleUsersChange: function() {
      var data = UserStore.getUsers();
      // If the data returned is not an error, set the state
      if(data && !data.error) {
        this.setState({options: data});
      }
    },

    getOptions: function(input, callback) {
      var self = this;
      UserActions.search(input);
        setTimeout(function() {
            callback(null, {
                options: self.state.options,
                // CAREFUL! Only set this to true when there are no more options,
                // or more specific queries will not be sent to the server.
                complete: false
            });
        }, 1000);
    },

    render: function() {
      return (
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
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
            <div className="section">
                <Select.Async className="input-field col s6"
                    loadOptions={this.getOptions}
                    multi={true}
                    name="Project-users"
                    onChange={this.handleSelectChange}
                    placeholder="Select user(s)"
                    searchable={this.state.searchable}
                    labelKey="name"
                    valueKey="id"
                    value={this.state.value}
                />
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Submit
              <i className="material-icons right">send </i>
            </button >
            <p>{this.state.result}</p>
          </form>
        </div>
        );
      }
  });

  module.exports = ProjectForm;

})();
