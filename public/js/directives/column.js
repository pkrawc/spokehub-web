angular
  .module('directive.column', [])
  .directive('column', function() {

    var navigation = function(scope, element, attr) {
      function toggleColumns() {
        var $columnWrapper = $('.columns-wrapper');
        var $target = $(this);
        var $siblings = $target.siblings();

        $target.toggleClass('open');
        $siblings.removeClass('open');

        if ($target.hasClass('open') || $siblings.hasClass('open')) {
          $target.addClass('tabbed');
          $siblings.addClass('tabbed');
          $columnWrapper.addClass('shrunk');
        } else {
          $target.removeClass('tabbed').css({
            'border-bottom':'none'
          });
          $siblings.removeClass('tabbed').css({
            'border-bottom':'none'
          });
          $columnWrapper.removeClass('shrunk');
        }
      }

      element.on('click', toggleColumns);

      console.log(scope);
    };

    return {
      restrict: 'E',
      scope: false,
      replace: true,
      templateUrl: '/views/directives/column.html',
      link: navigation
    };
  });
