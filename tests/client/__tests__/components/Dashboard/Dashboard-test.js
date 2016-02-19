(function() {
  'use strict';

  var DashboardPath = '../../../../../app/scripts/components/Dashboard/index.jsx';

  jest.dontMock(DashboardPath);

  var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

  var Dashboard = require(DashboardPath);

  describe('Dashboard', function() {

    it('renders the Dashboard component', function() {
      // Render Dashboard page in the document
      var dashboard = TestUtils.renderIntoDocument(<Dashboard />);
      // var button = TestUtils.findRenderedDOMComponentWithTag(landing, 'button');
      expect(dashboard.state.orgs).toEqual([]);
      // dashboard.setState({orgs: });

      // Verify that it has the correct content
      // expect(ReactDOM.findDOMNode(button).textContent).toBe('Start Triming');
    });
  });
})();
