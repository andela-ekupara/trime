(function(){
	'use strict';
	var React = require('react');
	var Landing = React.createClass({
		render: function() {
			return (
				<div>
					<div id="back">           </div>
<div id="action"></div>
<div id="grid">
  <p>Your company mission statement or your ultimate value.</p>
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--2-col"></div>
    <div className="mdl-cell mdl-cell--8-col">
      <p>Add some more descriptive content here to describe your product or service. What your offer is and how you can improve your potential customers daily experience. This could also be an explanation of the details of your offer if you are running a specific promotion</p>
    </div>
    <div className="mdl-cell mdl-cell--2-col"></div>
  </div>
</div>
<div className="mdl-grid">
  <div className="mdl-cell mdl-cell--4-col"><img src="./images/one.jpeg" className="responsive-image"/>
    <p>WE ARE THE BEST</p>
    <p>What does your company offer that will improve or solve a problem? Explain the pain point being alleviated</p>
  </div>
  <div className="mdl-cell mdl-cell--4-col"><img src="./images/five.jpeg" className="responsive-image"/>
    <p>WE ARE THE BEST</p>
    <p>What does your company offer that will improve or solve a problem? Explain the pain point being alleviated</p>
  </div>
  <div className="mdl-cell mdl-cell--4-col"><img src="./images/three.jpeg" className="responsive-image"/>
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
