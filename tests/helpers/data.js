(function() {
  'use strict';

  module.exports = [{
    'model': 'Users',
    'data': {
      'id': 1,
      'email': 'test@test.com',
      'name': 'Brian Kobe',
      'password': 'password'
    }
  }, {
    'model': 'Orgs',
    'data': {
      'id': 1,
      'name': 'Test',
      'description': 'For testing purposes'
    }
  }, {
    'model': 'OrgUsers',
    'data': {
      'role': 'owner',
      'org_id': 1,
      'user_id': 1
    }
  }];
})();