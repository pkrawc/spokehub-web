angular
  .module('directive.sections', [])
  .directive('sections', function() {
    var controller = function($scope) {
      
    }
    return {
      restrict: 'E',
<<<<<<< HEAD
      scope: false,
=======
      scope: {

      },
>>>>>>> parent of 9e46223... extend user schema / split up directives
      replace: true,
      templateUrl: 'views/directives/sections.html',
      controller: controller
    }
  });
