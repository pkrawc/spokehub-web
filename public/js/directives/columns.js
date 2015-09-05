angular
  .module('directive.columns', [])
  .directive('columns', function() {

    var navigation = function(scope, element, attrs) {
      
    }

    var controller = function($scope) {

    }

    return {
      restrict: 'E',
      scope: {

      },
      replace: true,
      templateUrl: '/views/directives/columns.html',
      link: navigation,
      controller: controller
    }
  });
