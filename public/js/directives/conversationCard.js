angular
  .module('directive.conversationCard', [])
  .directive('conversationCard', function() {

    var linkFn = function(scope, element, attrs) {};

    var controller = function($scope) {};

    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/views/directives/conversationCard.html',
      controller: controller,
      link: linkFn
    };
  });
