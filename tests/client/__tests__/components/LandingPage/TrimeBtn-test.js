(function() {

  'use strict';

  var trimeBtnPath = '../../../../../app/scripts/components/LandingPage/TrimeBtn.jsx';

  jest.dontMock(trimeBtnPath);

  var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

  var TrimeBtn = require(trimeBtnPath);

  describe('TrimeBtn', function() {

    it('renders the TrimeBtn component', function() {
      // Render the trime button in the document
      var trimebtn = TestUtils.renderIntoDocument(<TrimeBtn />);

      var trimebtnNode = ReactDOM.findDOMNode(trimebtn);

      // It should be an Element
      expect(trimebtnNode.nodeType).toEqual(1);
      // Verify that it has the correct content
      expect(trimebtnNode.textContent).toEqual('Start Triming');
    });
  });
})();
