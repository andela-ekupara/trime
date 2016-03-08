(function() {
  'use strict';
  //require('../../../testdom')('<html><body></body></html>');
  var MenuPath = '../../../../app/scripts/components/MenuBar/Menu.jsx';
  var React = require('react');
  var Menu = require(MenuPath);
  var expect = require('chai').expect;
  var enzyme = require('enzyme');
  var sinon = require('sinon');
  var localStorage = require('localStorage');
  var UserActions = require('../../../../app/scripts/actions/UserActions');
  var UserStore = require('../../../../app/scripts/stores/UserStore');
  describe('Menu', function() {
    it('renders the Menu component', function() {
      var menu = enzyme.shallow(<Menu />);
      expect(menu.find('.dropdown-content')).to.have.length(menu.length);
      expect(menu.state().menu).to.have.length(6);
    });
    it('Calls a registered callback', function() {
      sinon.stub(window.$.fn, 'sideNav', function() {
        return;
      });
      sinon.spy(UserActions, 'session');
      sinon.spy(UserStore, 'addChangeListener');
      sinon.stub(localStorage, 'getItem').returns(true);
      enzyme.mount(<Menu />);
      expect(UserActions.session.called).to.equal(true);
      expect(UserStore.addChangeListener.called).to.equal(true);
    });
});
})();
