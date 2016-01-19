(function(){
  'use strict';
  var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    UserActions = require('../../actions/UserActions');

    module.exports = React.createClass({
      componentWillMount: function() {
        UserActions.session();
        UserStore.addChangeListener(this.getSession);
      },

      getSession: function () {
        var data = UserStore.getData();
        if(data && !data.error) {
          this.props.setUser(data);
        }
      },

      render: function() {
        return(
            <div id="header">
              <div id="nav">
                <div>
                  <div className="md-inline-block">
                    <a>
                      <span className="title">TRIME</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
      }
  });
})();
