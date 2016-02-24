(function() {
  'use strict';
  var OrgPath = '../../../../app/scripts/components/OrgPage/OrgForm.jsx';
  var React = require('react');
  var Org = require(OrgPath);
  var expect = require('chai').expect;
  var enzyme = require('enzyme');
  var sinon = require('sinon');
  var OrgActions = require('../../../../app/scripts/actions/OrgActions');
  var OrgStore = require('../../../../app/scripts/stores/OrgStore');
  describe('Org', function() {

    it('renders the Menu component', function() {
        // Render Menu in the document
        var org = enzyme.shallow(<Org />);
        // Test the Menu state
        // expect(menu.find('.dropdown-content')).to.have.length(menu.length);
        // expect(menu.state().menu).to.have.length(6);
    });
    it('Calls a registered callback', function() {
      sinon.spy(OrgStore, 'addChangeListener');
      enzyme.mount(<Org />);
      expect(OrgStore.addChangeListener.called).to.equal(true);
    });
});
})();
