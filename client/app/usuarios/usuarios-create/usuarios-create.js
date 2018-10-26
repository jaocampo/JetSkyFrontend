'use strict';

angular.module('jetSkyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-create', {
        url: '/usuarios-create',
        template: '<usuarios-create></usuarios-create>'
      });
  });
