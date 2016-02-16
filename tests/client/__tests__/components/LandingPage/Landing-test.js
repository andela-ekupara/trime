(function() {
  'use strict';

  var landingPath = '../../../../../app/scripts/components/LandingPage/Landing.jsx';

  jest.dontMock(landingPath);

  var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

  var Landing = require(landingPath);

  describe('Landing', function() {

    it('renders the Landing component', function() {
      // Render Landing page in the document
      var landing = TestUtils.renderIntoDocument(<Landing />);
      var button = TestUtils.findRenderedDOMComponentWithTag(landing, 'button');

      // Verify that it has the correct content
      expect(ReactDOM.findDOMNode(button).textContent).toBe('Start Triming');
    });
  });
})();
