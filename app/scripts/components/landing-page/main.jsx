(function() {
	'use strict';

	var React = require('react'),
		RouteHandler = require('react-router').RouteHandler,
		Header = require('./header.jsx'),
		UserStore = require('../../stores/userStore'),
		UserActions = require('../../actions/userActions');

		var Main = React.createClass({
			getInitialState: function() {
				return {
					user: {}
				};
			},

			componentDidMount: function() {
				UserActions.session();
				UserStore.addChangeListener(this.getSession);
			},

			getSession: function () {
				var data = UserStore.getData();
				if(data && !data.error) {
					this.setState({user: data});
				}
			},

			render: function() {
				return (
					<div>
						<Header user={this.state.user} />
						<div className="handler">
							<RouteHandler />
						</div>
					</div>
				);
			}
		});

		module.exports = Main;
})();
