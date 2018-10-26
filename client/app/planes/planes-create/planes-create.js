'use strict';

angular.module('jetSkyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('planes-create', {
        url: '/planes-create',
        template: '<planes-create></planes-create>'
      });
  });
