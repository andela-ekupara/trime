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
      it('Login action', function() {
        UserActions.login(payload);
        expect(BaseActions.post.withArgs('/api/users/login', payload, TrimeConstants.USER_LOGIN).called).to.equal(true);
      });
      it('Sign Up action', function() {
        UserActions.signup(payload);
        expect(BaseActions.post.withArgs('/api/users', payload, TrimeConstants.USER_SIGNUP).called).to.equal(true);
      });
      it('Session action', function() {
        UserActions.session();
        expect(BaseActions.get.withArgs('/api/users/session', TrimeConstants.USER_SESSION).called).to.equal(true);
      });
      it('GitHub login action', function() {
        UserActions.githubLogin();
        expect(BaseActions.get.withArgs('/auth/github', TrimeConstants.GITHUB_LOGIN).called).to.equal(true);
      });
      it('Google login action', function() {
        UserActions.googleLogin();
        expect(BaseActions.get.withArgs('/auth/google', TrimeConstants.GOOGLE_LOGIN).called).to.equal(true);
      });
      it('Logout action', function() {
        UserActions.logout(token);
        expect(BaseActions.put.withArgs('/api/users/logout', token, TrimeConstants.USER_LOGOUT).called).to.equal(true);
      });
    });
  });
})();
