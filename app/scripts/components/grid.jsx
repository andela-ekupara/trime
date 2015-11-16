var React = require('react'),
GridList = require('material-ui/lib/grid-list/grid-list');
GridTile = require('material-ui/lib/grid-list/grid-tile');
Grid = React.createClass({
  render: function() {
    return (
    	<GridList
  			cellHeight={200}
  			style={{width: 320, height: 640, overflowY: 'auto'}}
  			>
  			{
    			tilesData.map(tile => <GridTile
      			title={tile.title}
			    subtitle={<span>by <b>{tile.author}</b></span>}
			    ><img src={'../../images/three.jpeg'} /></GridTile>)
  			}
  			</GridList>
  	);
  }
});

module.exports = Grid;
