angular
  .module('MainCtrl', [])
  .controller('MainController', function($scope) {

    $scope.year = new Date().getFullYear();

    $scope.columns = [
      {title: 'how'},
      {title: 'we'},
      {title: 'work'},
      {title: 'now'}
    ];

    $scope.how = {
      open: false
    };

    $scope.we = {
      open: false
    };

    $scope.work = {
      open: false
    };

    $scope.now = {
      open: false
    };

    $scope.toggleSection = function(index) {
      if (index == 0) {
        $scope.how.open = true;
      }
      if (index == 1) {
        $scope.we.open = true;
      }
      if (index == 2) {
        $scope.work.open = true;
      }
      if (index == 3) {
        $scope.now.open = true;
      }
    }

  });
