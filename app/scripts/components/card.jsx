var React = require('react');
var CardMedia = require('material-ui/lib/card/card-header');

var CardComponent = React.createClass({
	render: function() {
		return ( <CardMedia> <img src= '../../images/clock1.jpeg' /> </CardMedia>);
	}
});

module.exports = CardComponent;
