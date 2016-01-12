(function() {
  'use strict';
  var React = require('react');
  var OrgActions = require('../../actions/OrgActions');
  var OrgStore = require('../../stores/OrgStore');

  var OrgForm = React.createClass({
    getInitialState: function() {
      return {
        name: '',
        description: ''
      };
    },

    componentDidMount: function() {
      OrgStore.addChangeListener(this.handleUpdate);
    },

    handleUpdate: function() {
      var data = OrgStore.getData();
      if(data.error) {
        if(typeof data.error === 'string') {
          window.Materialize.toast(data.error, 2000, 'error-toast');
        }
      } else {
        window.Materialize.toast('Successfully created the Organization', 2000, 'success-toast rounded');
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
      OrgActions.createOrg(this.state.name, this.state.description);
    },

    render: function() {
      return (
        <div className="row">
          <form className="col s9" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input className="validate"
                    id="name"
                    name="name"
                    onChange={this.handleNameChange}
                    required
                    type="text"
                />
                <label className="active" htmlFor="name">
                  Organisation Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea className="materialize-textarea"
                    id="textarea1"
                    name="description"
                    onChange={this.handleDescriptionChange}
                    required
                >
                </textarea>
                <label htmlFor="Description">Description</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Submit
              <i className="material-icons right">send </i>
            </button>
          </form>
        </div>
        );
      }
  });

  module.exports = OrgForm;

})();
