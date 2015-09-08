angular
  .module('directive.columns', [])
  .directive('columns', function() {

    var navigation = function(scope, element, attrs) {

      var $mainNode = $('main')
      ,   $columns = $('.column')
      ,   $columnWrapper = $('.column-wrapper')
      ;

      function sectionNavigation() {
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
        if($targetSection.hasClass('open')) {
          $targetSection.removeClass('open').addClass('closed');
          var stateObj = {
            'home': true
          }
          history.pushState(stateObj, 'SPOKEHUB', '/')
        } else {
          setTimeout(function () {
            $targetSection.removeClass('closed').addClass('open');
          }, 300);
          $sectionSiblings.removeClass('open').addClass('closed');
          switch(sectionString) {
            case 'how':
              var stateObj = {
                'how': true
              }
              history.pushState(stateObj, 'HOW', '/how');
              break;
            case 'we':
              var stateObj = {
                'we': true
              }
              history.pushState(stateObj, 'WE', '/we');
              break;
            case 'work':
              var stateObj = {
                'we': true
              }
              history.pushState(stateObj, 'WORK', '/work');
              break;
            case 'now':
              var stateObj = {
                'we': true
              }
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

        addBottomBorder(sectionString, $columns);
      }

      function addBottomBorder(target, columns) {
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
      }

      function checkWindowLocation() {
        var windowLocation = window.location.pathname;

        switch (windowLocation) {
          case '/how':
            var $target = $('.column[data-section=how]');
            var $siblings = $target.siblings();
            var $section = $('.' + $target.data('section'));

            console.log($section);
            $columnWrapper.addClass('shrunk');
            $target.addClass('open tabbed');
            $siblings.each(function(){
              $(this).addClass('tabbed');
            });
            $section.addClass('open').removeClass('closed');
            break;
          case '/we':
            var target = $('.column[data-section=we]')
            ,   siblings = target.siblings()
            ;

            $columnWrapper.addClass('shrunk');
            target.addClass('open tabbed');
            siblings.addClass('tabbed').removeClass('open');
            addBottomBorder('we', $columns);
            $('section.we').removeClass('closed').addClass('open');
            break;
          case '/work':
            var target = $('.column[data-section=work]')
            ,   siblings = target.siblings()
            ;

            $columnWrapper.addClass('shrunk');
            target.addClass('open tabbed');
            siblings.addClass('tabbed').removeClass('open');
            addBottomBorder('work', $columns);
            $('section.work').removeClass('closed').addClass('open');
            break;
          case '/now':
            var target = $('.column[data-section=now]')
            ,   siblings = target.siblings()
            ;

            $columnWrapper.addClass('shrunk');
            target.addClass('open tabbed');
            siblings.addClass('tabbed').removeClass('open');
            addBottomBorder('now', $columns);
            $('section.now').removeClass('closed').addClass('open');
            break;
          default:
            return;
        }
      }

      $(function() {
        $columns.on('click', sectionNavigation);
        checkWindowLocation();
      });
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
