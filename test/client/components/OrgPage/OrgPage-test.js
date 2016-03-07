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

    it('renders the Org component', function() {
        var org = enzyme.shallow(<Org />);
    });
    it('Calls a registered callback', function() {
      sinon.spy(OrgStore, 'addChangeListener');
      enzyme.mount(<Org />);
      expect(OrgStore.addChangeListener.called).to.equal(true);
      expect(OrgStore.addChangeListener.callCount).to.equal(1);
    });
});
})();
