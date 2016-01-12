(function() {
  'use strict';
  var React = require('react');
  var Select = require('react-select');
  var OrgActions = require('../../actions/OrgActions');
  var UserActions = require('../../actions/userActions');
  var OrgStore = require('../../stores/OrgStore');
  var UserStore = require('../../stores/userStore');

  var UsersForm = React.createClass({
    getInitialState: function() {
      return {
        result: '',
        options: [],
        orgId: this.props.orgId,
        roles: [
            { value: 'owner', label: 'Owner' },
            { value: 'admin', label: 'Admin' },
            { value: 'user',  label: 'User' }
          ],
        user: null,
        role: null
      };
    },

    componentDidMount: function() {
      UserStore.addChangeListener(this.handleUsersChange);
      OrgStore.addChangeListener(this.handleOrgUsers);
    },

    handleSubmit: function(e) {
      e.preventDefault();
      var data = {
        orgId: this.state.orgId,
        userId: this.state.user.id,
        role: this.state.role.value
      };
      OrgActions.addUser(data);
    },

    handleRoleSelect: function(value) {
      this.setState({ role: value });
    },

    handleUserSelect: function(value) {
      this.setState({ user: value });
    },

    handleUsersChange: function() {
      var data = UserStore.getUsers();
      // If the data returned is not an error, set the state
      if(data && !data.error) {
        this.setState({options: data});
      }
    },

    handleOrgUsers: function() {
      var data = OrgStore.getOrgUsers();
      if(data.error) {
        if(typeof data.error === 'string') {
          window.Materialize.toast(data.error, 2000, 'error-toast');
        }
      } else {
        window.Materialize.toast(data.message, 2000);
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
              <div className="input-field col s4">
                <Select.Async
                    labelKey="name"
                    loadOptions={this.getOptions}
                    name="org-users"
                    onChange={this.handleUserSelect}
                    placeholder="Select user(s)"
                    searchable
                    value={this.state.user}
                    valueKey="id"
                />
              </div>
            <div className="input-field col s2">
              <Select
                  name="role_id"
                  onChange={this.handleRoleSelect}
                  options={this.state.roles}
                  placeholder="Select Role(s)"
                  value={this.state.role}
              />
            </div>
            <div className="input-field col s2">
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit
                <i className="material-icons right">send </i>
              </button>
            </div>
          </div>
          </form>
        </div>
        );
      }
  });

  module.exports = UsersForm;

})();
