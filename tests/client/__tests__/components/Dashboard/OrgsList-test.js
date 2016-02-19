(function() {
  'use strict';

  var OrgsListPath = '../../../../../app/scripts/components/Dashboard/OrgsList.jsx';

  jest.dontMock(OrgsListPath);

  var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

  var OrgsList = require(OrgsListPath);

  describe('OrgsList test', function() {

    var orgs = [
      {
        'id': 1,
        'name': 'org name 1',
        'description': 'description 1'
      },
      {
        'id': 2,
        'name': 'org name 2',
        'description': 'description 2'
      }
    ];

    it('renders the OrgsList component', function() {
      // Render OrgsList component in the document with dummy orgs
      var orgsList = TestUtils.renderIntoDocument(<OrgsList orgs={orgs} />);
      var spans = TestUtils.scryRenderedDOMComponentsWithTag(orgsList, 'span');
      var descriptions = TestUtils.scryRenderedDOMComponentsWithTag(orgsList, 'p');

      // Verify that the correct info is rendered
      expect(spans.length).toBe(orgs.length);
      expect(descriptions.length).toBe(orgs.length);
      // Assert that the first span contains the content in the first org, and so on
      spans.forEach(function(content, index) {
        expect(ReactDOM.findDOMNode(spans[index]).textContent).toBe(orgs[index].name);
        expect(ReactDOM.findDOMNode(descriptions[index]).textContent).toBe(orgs[index].description);
      });
    });
  });

})();
