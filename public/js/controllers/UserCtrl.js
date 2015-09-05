angular
  .module('UserCtrl', [])
  .controller('UserController', function($scope, User) {

  $scope.tagline = "Welcome to the HUB.";
  $scope.users = User.get()
    .then(function(response) {
    $scope.users = response.data;
  });
});
