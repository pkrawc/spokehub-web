angular
  .module('spokehub', [
    'ngRoute',
    'clientRoutes',
    'MainCtrl',
    'HowCtrl',
    'WeCtrl',
    'UserCtrl',
    'UserService',
    'directive.column',
    'directive.sections',
    'directive.conversationCard'
  ]);
