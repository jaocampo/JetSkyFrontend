'use strict';

angular.module('jetSkyApp', [
	'jetSkyApp.constants', 
	'ngCookies', 
	'ngResource', 
	'ngSanitize',
  'ui.router'
  ])

  .constant('API', 'http://localhost:8080/backend_jetsky-master')

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
