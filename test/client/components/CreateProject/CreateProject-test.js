(function() {
  'use strict';
  var createPath = '../../../../app/scripts/components/CreateProject/ProjectForm.jsx',
  React = require('react'),
  sinon = require('sinon'),
  expect = require('chai').expect,
  enzyme = require('enzyme'),
  ProjectStore = require('../../../../app/scripts/stores/ProjectStore'),
  Project = require(createPath);

  describe('Landing', function() {
      window.Materialize = {};
      before(function() {
        window.Materialize.toast = sinon.spy();
      });
    it('renders the Landing component', function() {
      var project = enzyme.shallow(<Project />);
      console.log(project.debug());
      expect(project.find('.row')).to.have.length(3);
    });
    it('Renders accurate content', function() {
      expect(enzyme.shallow(<Project />).text()).to.have.string('Project NameDescriptionSubmitsend');
    });
    it('Renders child components', function() {
      var project = enzyme.shallow(<Project />);
      // console.log(project.debug());
      expect(project.find('.input-field').length).to.equal(2);
      expect(project.find('.materialize-textarea').length).to.equal(1);
      expect(project.find('.material-icons').length).to.equal(1);
    });
    it('Calls the registered Callback', function() {
      sinon.spy(ProjectStore, 'addChangeListener');
      var landing = enzyme.mount(<Project />);
      expect(ProjectStore.addChangeListener.called).to.equal(true);
      expect(ProjectStore.addChangeListener.callCount).to.equal(1);
      ProjectStore.addChangeListener.restore();
    });
    it('Component has the correct states', function() {
      var project = enzyme.shallow(<Project />);
      expect(project.state().name).to.eql('');
      expect(project.state().description).to.eql('');
      // expect(project.state().orgId).to.eql('');
    });
    it('calls componentDidMount', function() {
      sinon.spy(Project.prototype, 'componentDidMount');
      enzyme.mount(<Project />);
      expect(Project.prototype.componentDidMount.calledOnce).to.equal(true);
      Project.prototype.componentDidMount.restore();
    });
    it('calls the own changeListener', function() {
      sinon.spy(ProjectStore, 'setProjectResult');
      enzyme.mount(<Project />);
      ProjectStore.setProjectResult([{name: 'Projects', description: 'Away', orgId: 2}]);
      expect(ProjectStore.setProjectResult.called).to.eql(true);
      ProjectStore.setProjectResult.restore();
    });
  });
})();
