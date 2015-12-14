(function(){
  'use strict';
  var React = require('react');
  var StartBtn = require('./trimebtn.jsx');
  var Landing = React.createClass({
    render: function() {
      return (
        <div>
          <div id="back">
            <StartBtn />
          </div>
          <div id="action"></div>
            <div id="grid">
              <p>Your company mission statement or your ultimate value.</p>
              <div className="row">
                <div className="col s2">.</div>
                <div className="col s8">
                  <p>Add some more descriptive content here to describe your product or service. What your offer is and how you can improve your potential customers daily experience. This could also be an explanation of the details of your offer if you are running a specific promotion</p>
                </div>
                <div className="col s2">.</div>
              </div>
            </div>
            <div className="row">

            <div className="col s12 m6 l4"><img src="./images/one.jpeg" className="responsive-image"/>
              <p>WE ARE THE BEST</p>
              <p>What does your company offer that will improve or solve a problem? Explain the pain point being alleviated</p>
            </div>

            <div className="col s12 m6 l4"><img src="./images/five.jpeg" className="responsive-image"/>
              <p>WE ARE THE BEST</p>
              <p>What does your company offer that will improve or solve a problem? Explain the pain point being alleviated</p>
            </div>

            <div className="col s12 m6 l4"><img src="./images/three.jpeg" className="responsive-image"/>
              <p>WE ARE THE BEST</p>
              <p>What does your company offer that will improve or solve a problem? Explain the pain point being alleviated</p>
            </div>
          </div>
        </div>
        );
    }
  })
module.exports = Landing;
})();
