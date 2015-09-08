angular
  .module('clientRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
          .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
          })
          .when('/how', {
            templateUrl: 'views/home.html',
            controller: 'HowController',
            reloadOnSearch: false
          })
          .when('/we', {
            templateUrl: 'views/home.html',
            controller: 'WeController',
            reloadOnSearch: false
          })
          .when('/work', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            reloadOnSearch: false
          })
          .when('/now', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            reloadOnSearch: false
          })
          .when('/users', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
          })
          .otherwise({
            redirectTo: '/'
          });

          $locationProvider.html5Mode(true);
      }
    ]);
