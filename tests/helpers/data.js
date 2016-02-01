(function() {
  'use strict';

  module.exports = [{
    'model': 'users',
    'data': {
      'id': 1,
      'email': 'test@test.com',
      'name': 'Brian Kobe',
      'password': 'password'
    }
  }, {
    'model': 'orgs',
    'data': {
      'id': 1,
      'name': 'Test',
      'description': 'For testing purposes'
    }
  }, {
    'model': 'org_users',
    'data': {
      'role': 'owner',
      'org_id': 1,
      'user_id': 1
    }
  }];
})();
