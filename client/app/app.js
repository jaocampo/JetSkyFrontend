'use strict';

angular.module('jetSkyApp', [
	'jetSkyApp.constants', 
	'ngCookies', 
	'ngResource', 
	'ngSanitize',
    'ui.router'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
