'use strict';

// Declare app level module which depends on views, and components
angular.module('project', [
  'ui.router',
  'project.dashboard',
  'ngAnimate'
])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/dashboard");
    }]);
