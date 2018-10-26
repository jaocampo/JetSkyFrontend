'use strict';

angular.module('jetSkyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('planes-list', {
        url: '/planes-list',
        template: '<planes-list></planes-list>'
      });
  });
