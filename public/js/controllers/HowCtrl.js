angular
  .module('HowCtrl', [])
  .controller('HowController', function($scope) {
    $scope.slides = [
      {image:'images/principles/01.svg'},
      {image:'images/principles/02.svg'},
      {image:'images/principles/03.svg'},
      {image:'images/principles/04.svg'}
    ];
    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function(index) {
      $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function(index) {
      return $scope.currentIndex === index;
    };
    $scope.prevSlide = function() {
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function() {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
  });
