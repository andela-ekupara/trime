(function() {
  'use strict';
  var React = require('react');
  var Select = require('react-select');
  var OrgActions = require('../../actions/OrgActions');
  var OrgStore = require('../../stores/OrgStore');

  const FLAVOURS = [
    {
      label: 'Chocolate',
      value: 'chocolate'
    }, {
      label: 'Vanilla',
      value: 'vanilla'
    }, {
      label: 'Strawberry',
      value: 'strawberry'
    }, {
      label: 'Caramel',
      value: 'caramel'
    }, {
      label: 'Cookies and Cream',
      value: 'cookiescream'
    }, {
      label: 'Peppermint',
      value: 'peppermint'
    }
  ];
  var OrgForm = React.createClass({
    getInitialState: function() {
      return {
        name: '',
        description: '',
        result: '',
        searchable: true,
        options: FLAVOURS,
        value: []
      };
    },

    componentDidMount: function() {
      OrgStore.addChangeListener(this.handleUpdate);
    },

    handleUpdate: function() {
      var data = OrgStore.getData();
      if (data.error) {
        this.setState({result: 'Error Creating the Org!'});
      } else {
        this.setState({result: 'Successfully created the Organisation'});
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

    handleSelectChange: function(value) {
      console.log('You\'ve selected:', value);
      this.setState({ value });
    },

    render: function() {
      return (
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input id="name" type="text" name="name" onChange={this.handleNameChange} className="validate" required/>
                <label className="active" for="name">
                  Organisation Name
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
                <Select className="input-field col s6"
                    multi
                    onChange={this.handleSelectChange}
                    options={this.state.options}
                    placeholder="Select user(s)"
                    searchable={this.state.searchable}
                    simpleValue
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
module.exports = OrgForm;
})();
