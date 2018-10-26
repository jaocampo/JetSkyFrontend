'use strict';

angular.module('jetSkyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('planes-update', {
        url: '/planes-update',
        template: '<planes-update></planes-update>'
      });
  });
