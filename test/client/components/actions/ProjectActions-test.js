(function() {
  'use strict';
  var sinon = require('sinon'),
  expect = require('chai').expect,
  React = require('react'),
  enzyme = require('enzyme'),
  TrimeConstants = require('../../../../app/scripts/constants/TrimeConstants'),
  BaseActions = require('../../../../app/scripts/actions/BaseActions'),
  ProjectActions = require('../../../../app/scripts/actions/ProjectActions');

  describe('Project Actions', function() {
    var token = 'gerrarahia',
    payload = {orgId: 3, projectId: 4},
    id = 6;

    beforeEach(function() {
      sinon.stub(BaseActions, 'get').returns(true);
      sinon.stub(BaseActions, 'put').returns(true);
      sinon.stub(BaseActions, 'post').returns(true);
      sinon.stub(BaseActions, 'delete').returns(true);
    });

    afterEach(function() {
      BaseActions.get.restore();
      BaseActions.put.restore();
      BaseActions.post.restore();
      BaseActions.delete.restore();
    });

    describe('Tests Project Actions', function() {
      it('Create Projects Action', function() {
        ProjectActions.createProject(payload);
        expect(BaseActions.post.withArgs('/api/orgs/' + payload.orgId + '/projects', payload,  TrimeConstants.PROJECT_CREATE).called).to.equal(true);
      });
      it('Get Projects Action', function() {
        ProjectActions.getProjects(id);
        expect(BaseActions.get.withArgs('/api/orgs/' + id + '/projects', TrimeConstants.PROJECTS_GET).called).to.equal(true);
      });
      it('Add User Action', function() {
        ProjectActions.addUser(payload);
        expect(BaseActions.post.withArgs('/api/orgs/' + payload.orgId + '/projects/' + payload.projectId + '/users', payload, TrimeConstants.PROJECT_USERS_CREATE).called).to.equal(true);
      });
    });
  });
})();
