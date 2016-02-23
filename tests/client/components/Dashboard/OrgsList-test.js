(function() {
  'use strict';

  var OrgsListPath = '../../../../app/scripts/components/Dashboard/OrgsList.jsx',
    React = require('react'),
    expect = require('chai').expect,
    enzyme = require('enzyme'),
    OrgsList = require(OrgsListPath);

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
      var orgsList = enzyme.shallow(<OrgsList orgs={orgs} />);

      // Verify that the correct info is rendered
      expect(orgsList.find('.card-title')).to.have.length(orgs.length);
      expect(orgsList.text()).to.have.string(orgs[1].name);
      expect(orgsList.text()).to.have.string(orgs[1].description);
      expect(orgsList.text()).to.have.string(orgs[0].description);
      expect(orgsList.text()).to.have.string(orgs[0].description);
    });
  });

})();
