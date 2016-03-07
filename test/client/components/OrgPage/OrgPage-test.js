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
     window.Materialize = {};
     before(function() {
         window.Materialize.toast = sinon.spy();
     });
    it('renders the Org component', function() {
        var org = enzyme.shallow(<Org />);
        expect(org.find('.row')).to.have.length(3);
    });
    it('Renders accurate content', function() {
      expect(enzyme.shallow(<Org />).text()).to.have.string('Organisation name');
      expect(enzyme.shallow(<Org />).text()).to.have.string('Description');
    });
    it('Renders child components', function() {
      var org = enzyme.shallow(<Org />);
      console.log(org.debug());
      expect(org.find('div').length).to.equal(5);
      expect(org.find('form').length).to.equal(1);
      expect(org.find('button').length).to.equal(1);
      expect(org.find('label').length).to.equal(2);
    });
    it('Calls a registered callback', function() {
      sinon.spy(OrgStore, 'addChangeListener');
      enzyme.mount(<Org />);
      expect(OrgStore.addChangeListener.called).to.equal(true);
      expect(OrgStore.addChangeListener.callCount).to.equal(1);
    });
    it('calls the handleUpdate changeListener', function() {
    sinon.spy(OrgStore, 'setCreatedOrg');
    enzyme.mount(<Org />); // Mount the component
    // Trigger a change in the UserStore
    OrgStore.setCreatedOrg({createdOrg: 'Andela'});
    // The getCreatedUser function should be called
    expect(OrgStore.setCreatedOrg.called).to.eql(true);
    OrgStore.setCreatedOrg.restore();
  });
});
})();
