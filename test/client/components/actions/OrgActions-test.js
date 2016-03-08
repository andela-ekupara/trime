(function() {
  'use strict';
  var sinon = require('sinon'),
  expect = require('chai').expect,
  React = require('react'),
  enzyme = require('enzyme'),
  TrimeConstants = require('../../../../app/scripts/constants/TrimeConstants'),
  BaseActions = require('../../../../app/scripts/actions/BaseActions'),
  OrgActions = require('../../../../app/scripts/actions/OrgActions');

  describe('Project Actions', function() {
    var token = 'gerrarahia',
    payload = {orgId: 3, projectId: 4},
    id = 6,
    name = 'Project',
    description = 'A new project';

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

    describe('Tests Org Actions', function() {
      it('Create Org Action', function() {
        OrgActions.createOrg(name, description);
        var data = {
          name: name,
          description: description
        };
        expect(BaseActions.post.withArgs('/api/orgs', data,  TrimeConstants.ORG_CREATE).called).to.equal(true);
      });
      it('Get Org Action', function() {
        OrgActions.getOrgs();
        expect(BaseActions.get.withArgs('/api/orgs',  TrimeConstants.ORGS_GET).called).to.equal(true);
      });
      it('Get Users Action', function() {
        OrgActions.getUsers(id);
        expect(BaseActions.get.withArgs('/api/orgs/' + id + '/users' , TrimeConstants.ORG_USERS_GET).called).to.equal(true);
      });
      it('Add Users Action', function() {
        OrgActions.addUser(payload);
        expect(BaseActions.post.withArgs('/api/orgs/' + payload.orgId + '/users' , payload, TrimeConstants.ORG_USERS_CREATE).called).to.equal(true);
      });
    });
  });
})();
