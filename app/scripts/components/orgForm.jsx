(function(){
  'use strict';
  var React = require('react'),
      trimeActions = require('../actions/TrimeActions'),
      trimeStore = require('../stores/TrimeStore');

  var OrgForm = React.createClass ({
    getInitialState: function() {
      return {
        name: '',
        description: ''
      };
    },

    handleDescriptionChange: function(e) {
      this.setState({description: e.target.value});
    },

    handleNameChange: function(e) {
      this.setState({name: e.target.value});
    },

    onSubmit: function(e) {
      e.preventDefault();
      trimeActions.createOrg(this.state.name, this.state.description);
    },

    render: function() {
      return (
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" name="name" onChange={this.handleNameChange}
                  className="validate" />
                  <label className="active" for="name"> Organisation Name </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" name="description" onChange={this.handleDescriptionChange}
                  className="materialize-textarea"></textarea>
                  <label for="Description">Description</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
      );
    }

  });
module.exports = OrgForm;
})();
