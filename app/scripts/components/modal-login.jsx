var React = require('react');
var Dialog = require('material-ui').Dialog;

// var standardActions = [
//   { text: 'Cancel' },
//   { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
// ];



// var customActions = [
//   <FlatButton
//     label="Cancel"
//     secondary={true}
//     onTouchTap={this._handleCustomDialogCancel} />,
//   <FlatButton
//     label="Submit"
//     primary={true}
//     onTouchTap={this._handleCustomDialogSubmit} />
// ];

var DialogComponent = React.createClass({
	render : function() {
		return(
			<Dialog
				title="Dialog With Standard Actions" />
				// actions={standardActions}
				// actionFocus="submit"
				// open={this.state.showDialogStandardActions}
				// onRequestClose={this._handleRequestClose}>
				// The actions in this window are created from the json thats passed in.
			);
	}
})

module.exports = DialogComponent;