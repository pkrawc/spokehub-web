angular
  .module('clientRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
          .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
          })
          .when('/users', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
