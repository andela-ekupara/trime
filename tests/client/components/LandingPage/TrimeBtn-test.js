(function() {

  'use strict';
 var trimeBtnPath = '../../../../app/scripts/components/LandingPage/TrimeBtn.jsx';
 var React = require('react');
 var expect = require('chai').expect;
 var enzyme = require('enzyme');
 var TrimeBtn = require(trimeBtnPath);

  describe('TrimeBtn', function() {
    it('renders the TrimeBtn component', function() {
      // Render the trime button in the document
      var trimebtn = enzyme.shallow(<TrimeBtn />);
      // It should be an Element
      expect(trimebtn.find('.btn')).to.have.length(1);
       // Verify that it has the correct content
      expect(trimebtn.text()).to.have.string('Start Triming');
    });
  });
})();
