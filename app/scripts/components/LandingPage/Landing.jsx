(function(){
  'use strict';
  var React = require('react');
  var TrimeBtn = require('./TrimeBtn.jsx');
  var Landing = React.createClass({
    render: function() {
      return (
        <div>
          <div id="back">
            <TrimeBtn />
          </div>
          <div id="action"></div>
            <div id="grid">
              <p>Trime aims to add value to your company</p>
              <div className="row">
                <div className="col s2">.</div>
                <div className="col s8">
                  <p>Do you have a difficult time accounting for the time you spend working on projects? Then it's time to trime. <br />
                  Our application is a flexible and easy to use solution that helps you and your colleagues keep track of time spent on projects</p>
                </div>
                <div className="col s2">.</div>
              </div>
            </div>
            <div className="row">

            <div className="col s12 m6 l4"><img src="./images/one.jpeg" className="responsive-image"/>
              <p>MANAGE YOUR TIME</p>
              <p>Track time on different projects easily and effectively.</p>
            </div>

            <div className="col s12 m6 l4"><img src="./images/five.jpeg" className="responsive-image"/>
              <p>ADD VALUE</p>
              <p>Automate repititive tasks and keep your focus on what matters.</p>
            </div>

            <div className="col s12 m6 l4"><img src="./images/three.jpeg" className="responsive-image"/>
              <p>SAVE MONEY</p>
              <p>Get paid based on the actual amount of time spent on projects.</p>
            </div>
          </div>
        </div>
        );
    }
  });
module.exports = Landing;
})();
