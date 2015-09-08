angular
  .module('directive.sections', [])
  .directive('sections', function() {

    var sections = function(scope, element, attrs) {};

    var controller = function($scope) {};

    return {
      restrict: 'E',
      scope: false,
      replace: true,
      templateUrl: 'views/directives/sections.html',
      controller: controller,
      link: sections
    };
  });
