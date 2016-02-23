(function() {
  'use strict';
  var MenuPath = '../../../../app/scripts/components/MenuBar/Menu.jsx';
  var React = require('react');
  var Menu = require(MenuPath);
  var expect = require('chai').expect;
  var enzyme = require('enzyme');

  describe('Menu', function() {
//
    it('renders the Menu component', function() {
      // Render Menu in the document
      var menu = enzyme.shallow(<Menu />);
      // Test the Menu state
      expect(menu.find('.dropdown-content')).to.have.length(menu.length);
      expect(menu.state().menu).to.have.length(6);
  });
});
})();
