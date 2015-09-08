angular
  .module('spokehub', [
    'ngRoute',
    'clientRoutes',
    'MainCtrl',
    'HowCtrl',
    'WeCtrl',
    'UserCtrl',
    'UserService',
    'directive.columns',
    'directive.sections',
    'directive.conversationCard'
  ]);
