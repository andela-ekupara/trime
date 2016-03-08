(function() {
  'use strict';
  var sinon = require('sinon'),
  expect = require('chai').expect,
  React = require('react'),
  enzyme = require('enzyme'),
  TrimeConstants = require('../../../../app/scripts/constants/TrimeConstants'),
  BaseActions = require('../../../../app/scripts/actions/BaseActions'),
  TrackingActions = require('../../../../app/scripts/actions/TrackingActions');

  describe('Tracking Actions', function() {
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

    describe('Tests Tracking Actions', function() {
      it('Get Projects Action', function() {
        TrackingActions.getProjects(id);
        expect(BaseActions.get.withArgs('/api/time-tracks/getProjects/' + id, TrimeConstants.GET_PROJECTS).called).to.equal(true);
      });
      it('Start Tracking action', function() {
        TrackingActions.start(payload);
        expect(BaseActions.post.withArgs('/api/time-tracks/start', payload, TrimeConstants.START).called).to.equal(true);
      });
      it('Pause Tracking action', function() {
        TrackingActions.pause();
        expect(BaseActions.put.withArgs('/api/time-tracks/pause', null, TrimeConstants.PAUSE).called).to.equal(true);
      });
      it('Resume Tracking action', function() {
        TrackingActions.resume();
        expect(BaseActions.post.withArgs('/api/time-tracks/resume', null, TrimeConstants.RESUME).called).to.equal(true);
      });
      it('Stop Tracking action', function() {
        TrackingActions.stop(payload);
        expect(BaseActions.put.withArgs('/api/time-tracks/stop', payload, TrimeConstants.STOP).called).to.equal(true);
      });
    });
  });
})();
