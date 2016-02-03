(function() {
  'use strict';

  var projectPath = '../../../../../app/scripts/components/CreateProject/index.jsx';

  jest.dontMock(projectPath);

  var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

  var Project = require(projectPath);

  describe('Project Form', function() {

    it('Should include a form', function() {
      // Render Landing page in the document
      var project = TestUtils.renderIntoDocument(<Project />);
      var projectNode = ReactDOM.findDOMNode(project);

      expect(projectNode.nodeType).toEqual(1);

      // Verify that it has the correct content
    //  expect(ReactDOM.findDOMNode(button).textContent).toBe('Start Triming');
    });
  });
})();
