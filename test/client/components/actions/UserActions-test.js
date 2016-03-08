(function() {
  'use strict';
  var sinon = require('sinon'),
  expect = require('chai').expect,
  React = require('react'),
  enzyme = require('enzyme'),
  TrimeConstants = require('../../../../app/scripts/constants/TrimeConstants'),
  BaseActions = require('../../../../app/scripts/actions/BaseActions'),
  UserActions = require('../../../../app/scripts/actions/UserActions');

  describe('User Actions', function() {
    var token = 'gerrarahia',
    payload = {},
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

    describe('Tests User Actions', function() {
      it('Public documents action', function() {
        DocumentActions.userDocuments(token);
        expect(BaseActions.get.withArgs('/api/documents', DocConstants.GET_DOCS, token).called).to.equal(true);
      });
      it('Owner documents action', function() {
        DocumentActions.ownerDocuments(token, id);
        expect(BaseActions.get.withArgs('/api/users/' + id + '/documents', DocConstants.OWNER_DOCS, token).called).to.equal(true);
      });
      // it('Create document action', function() {
      //   DocumentActions.createDocument(payload, token);
      //   expect(BaseActions.post.withArgs('/api/documents', payload, DocConstants.CREATE_DOCS, token).called).to.equal(true);
      // });
      it('Delete document action', function() {
        DocumentActions.deleteDocument(id, token);
        expect(BaseActions.delete.withArgs('/api/documents/' + id, DocConstants.DELETE_DOC, token).called).to.equal(true);
      });
      it('Get document action', function() {
        DocumentActions.setDoc(id, token);
        expect(BaseActions.get.withArgs('/api/documents/' + id, DocConstants.ONE_DOCS, token).called).to.equal(true);
      });
      it('Update document action', function() {
        DocumentActions.updateDoc(id, payload, token);
        expect(BaseActions.put.withArgs('/api/documents/' + id, payload, DocConstants.UPDATE_DOC, token).called).to.equal(true);
      });
    });
  });
})();
