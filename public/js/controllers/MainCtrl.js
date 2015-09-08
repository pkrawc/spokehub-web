angular
  .module('MainCtrl', [])
  .controller('MainController', function($scope) {

    $scope.year = new Date().getFullYear();
    $scope.tagline = 'Spokehub NOW';
});
