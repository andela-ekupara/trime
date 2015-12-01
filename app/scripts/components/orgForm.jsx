(function(){
  'use strict';
  var React = require('react');
  var OrgForm = React.createClass ({
    render: function() {
      return (
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" name="name" className="validate" />
                  <label className="active" for="name">Organisation Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" name="description" className="materialize-textarea"></textarea>
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
