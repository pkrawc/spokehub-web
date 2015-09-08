angular
  .module('UserService', [])
  .factory('User', ['$http', function($http) {

  return {
    get: function() {
      return $http.get('/api/users');
    },
    create: function(userData) {
      return $http.post('/api/users');
    },
    delete: function(id) {
      return $http.delete('/api/users/' + id);
    }
  };

}]);
