(function() {
  'use strict';
  jest.dontMock('../../../app/scripts/components/LandingPage/TrimeBtn.jsx');

  var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

  var TrimeBtn = require('../../../app/scripts/components/LandingPage/TrimeBtn.jsx');

  describe('TrimeBtn', function() {

    it('renders the TrimeBtn component', function() {
      // Render the trime button in the document
      var trimebtn = TestUtils.renderIntoDocument( < TrimeBtn / > );

      var trimebtnNode = ReactDOM.findDOMNode(trimebtn);

      // Verify that it has the correct content
      expect(trimebtnNode.nodeType).toEqual(1);
      expect(trimebtnNode.textContent).toEqual('Start Triming');
    });
  });
})();
