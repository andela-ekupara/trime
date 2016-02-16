(function() {
  'use strict';

  var React = require('react'),
    Menu = require('../MenuBar/Menu.jsx');

  var Header = React.createClass({
    render: function() {
      return (
        <nav className="transparent" id="header">
          <div className="nav-wrapper" id="nav">
            <a className="brand-logo" href="/">TRIME</a>
            <ul className="right" id="nav-mobile">
              <li className="hide-on-med-and-down"><a href="/">Home</a></li>
              <li className="hide-on-med-and-down"><a href="#">About</a></li>
              <li>
                  <Menu setUser={this.props.setUser} />
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  });

  module.exports = Header;

})();
