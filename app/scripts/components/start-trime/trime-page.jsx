(function() {
	'use strict';
	var React = require('react'),
		Select = require('react-select');

		var TrimePage = React.createClass({
			getInitialState: function() {
				return {
					disabled: false,
					searchable: true,
					clearable: true
				}
			},

			logChange: function(val) {
				console.log('selected' + val);
			},

			render: function() {
				var options = [
				{value: 'one', label: 'One'},
				{value: 'two', label:'Two'},
				];

				return (
					<div >
						<label>select Project</label>
							<Select className="input-field col s12" autofocus options ={options} simpleValue disabled={this.state.disabled} searchable={this.state.searchable} clearable={this.state.clearable} onChange={this.logChange}/>
					</div>
				);
			}
		});

		module.exports = TrimePage;

})();
