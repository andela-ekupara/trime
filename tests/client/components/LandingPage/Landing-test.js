(function() {
  'use strict';

  var landingPath = '../../../../app/scripts/components/LandingPage/Landing.jsx',
  TrimeBtn = require('../../../../app/scripts/components/LandingPage/TrimeBtn.jsx'),
  React = require('react'),
  expect = require('chai').expect,
  enzyme = require('enzyme'),
  Landing = require(landingPath);

  describe('Landing', function() {
    it('renders the Landing component', function() {
      // Render Landing page in the document
      var landing = enzyme.shallow(<Landing />);
      // Check that it has a child component
      expect(landing.contains(<TrimeBtn />)).to.equal(true);
    });
  });
})();
