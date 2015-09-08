angular
  .module('MainCtrl', [])
  .controller('MainController', function($scope) {
  $scope.tagline = 'Spokehub NOW';
  $scope.year = new Date().getFullYear();

  $scope.columnsControl = {};

  $scope.signIn = function() {};
});
