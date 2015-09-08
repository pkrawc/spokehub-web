angular
  .module('directive.columns', [])
  .directive('columns', function() {

    var navigation = function(scope, element, attrs) {

      var $mainNode = $('main')
      ,   $columns = $('.column')
      ,   $columnWrapper = $('.column-wrapper')
      ;

      scope.sectionNavigation = function() {
        var $targetColumn = $(this)
        ,   $columnSiblings = $targetColumn.siblings()
        ,   sectionString = $targetColumn.data('section')
        ,   $targetSection = $('.' + sectionString)
        ,   $sectionSiblings = $targetSection.siblings()
        ;

        //expand selection horizontally
        $targetColumn.toggleClass('open');
        $columnSiblings.removeClass('open');

        // shrink horizontally if at least one column is open
        if ($columns.hasClass('open')) {
          $columns.addClass('tabbed');
          $columnWrapper.addClass('shrunk');
        } else {
          $columns.removeClass('tabbed').css({
            'border-bottom':'none'
          });
          $columnWrapper.removeClass('shrunk');
        }

        // open corresponding section

        var stateObj = {
          'home': true
        };

        if($targetSection.hasClass('open')) {
          $targetSection.removeClass('open').addClass('closed');
          history.pushState(stateObj, 'SPOKEHUB', '/');
        } else {
          setTimeout(function () {
            $targetSection.removeClass('closed').addClass('open');
          }, 600);
          $sectionSiblings.removeClass('open').addClass('closed');
          switch(sectionString) {
            case 'how':
              stateObj = {
                'how': true
              };
              history.pushState(stateObj, 'HOW', '/how');
              break;
            case 'we':
              stateObj = {
                'we': true
              };
              history.pushState(stateObj, 'WE', '/we');
              break;
            case 'work':
              stateObj = {
                'we': true
              };
              history.pushState(stateObj, 'WORK', '/work');
              break;
            case 'now':
              stateObj = {
                'we': true
              };
              history.pushState(stateObj, 'NOW', '/now');
              break;
          }
        }

        // change background according to the color closed
        if (sectionString == 'how' || sectionString == 'work') {
          $mainNode.removeClass('white').addClass('black');
        }
        if (sectionString == 'we' || sectionString == 'now') {
          $mainNode.removeClass('black').addClass('white');
        }
        scope.addBottomBorder(sectionString, $columns);
      };

      scope.addBottomBorder = function(target, columns) {
        if (target == 'how' && columns.hasClass('tabbed')) {
          $(columns[2]).css({
            'border-bottom':'4px solid #F9F9F9'
          });
          $(columns[2]).siblings().css({
            'border-bottom':'none'
          });
        }
        if (target == 'we' && columns.hasClass('tabbed')) {
          $(columns[3]).css({
            'border-bottom':'4px solid #212121'
          });
          $(columns[3]).siblings().css({
            'border-bottom':'none'
          });
        }
        if (target == 'work' && columns.hasClass('tabbed')) {
          $(columns[0]).css({
            'border-bottom':'4px solid #F9F9F9'
          });
          $(columns[0]).siblings().css({
            'border-bottom':'none'
          });
        }
        if (target == 'now' && columns.hasClass('tabbed')) {
          $(columns[1]).css({
            'border-bottom':'4px solid #212121'
          });
          $(columns[1]).siblings().css({
            'border-bottom':'none'
          });
        }
      };

      scope.checkWindowLocation = function() {
        var windowLocation = window.location.pathname;

        switch (windowLocation) {
          case '/how':
            var $targetLocation = $('.column[data-section=how]');
            var $siblingLocations = $targetLocation.siblings();

            $mainNode.removeClass('white').addClass('black');
            $columnWrapper.addClass('shrunk');
            $targetLocation.addClass('open tabbed');
            $siblingLocations.each(function(){
              $(this).addClass('tabbed');
            });
            setTimeout(function(){
              $('.how').removeClass('closed').addClass('open');
              scope.addBottomBorder('how', $columns);
            },600);
            break;
          case '/we':
            $targetLocation = $('.column[data-section=we]');
            $siblingLocations = $targetLocation.siblings();

            $mainNode.removeClass('black').addClass('white');
            $columnWrapper.addClass('shrunk');
            $targetLocation.addClass('open tabbed');
            $siblingLocations.each(function(){
              $(this).addClass('tabbed');
            });
            setTimeout(function(){
              $('.we').removeClass('closed').addClass('open');
              scope.addBottomBorder('we', $columns);
            },600);
            break;
          case '/work':
            $targetLocation = $('.column[data-section=work]');
            $siblingLocations = $targetLocation.siblings();

            $mainNode.removeClass('white').addClass('black');
            $columnWrapper.addClass('shrunk');
            $targetLocation.addClass('open tabbed');
            $siblingLocations.each(function(){
              $(this).addClass('tabbed');
            });
            setTimeout(function(){
              $('.work').removeClass('closed').addClass('open');
              scope.addBottomBorder('work', $columns);
            },600);
            break;
          case '/now':
            $targetLocation = $('.column[data-section=now]');
            $siblingLocations = $targetLocation.siblings();

            $mainNode.removeClass('black').addClass('white');
            $columnWrapper.addClass('shrunk');
            $targetLocation.addClass('open tabbed');
            $siblingLocations.each(function(){
              $(this).addClass('tabbed');
            });
            setTimeout(function(){
              $('.now').removeClass('closed').addClass('open');
              scope.addBottomBorder('now', $columns);
            },600);
            break;
          default:
            return;
        }
      };

      $(function() {
        $columns.on('click', scope.sectionNavigation);
        scope.checkWindowLocation();
      });

    };

    return {
      restrict: 'E',
      scope: {
        control: "="
      },
      replace: true,
      templateUrl: '/views/directives/columns.html',
      link: navigation
    };
  });
