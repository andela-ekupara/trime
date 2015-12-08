(function() {
  'use strict';
  var React = require('react');
  var DashBoard = React.createClass({
    render: function() {
      return (
          <div className="container">
            <div className="row">
              <div className="col s12">TRIME DASHBOARD</div>
              <div className="col s12 m4"><h6>Projects</h6></div>
              <div className="col s12 m4"><a href=""><h6>Show all</h6></a></div>
              <div className="col s12 m4"><a className="waves-effect waves-light btn"><i className="material-icons right">send</i>create project</a></div>
            </div>
            <div className = "row">
            <div className="col s12 m4">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Project Title</span>
                      <p>Project desciption.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Project Title</span>
                      <p>Project desciption.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Project Title</span>
                      <p>Project desciption.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div></div>
          </div>
      );
    }
  });
  module.exports = DashBoard;
})();


