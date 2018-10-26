'use strict';

angular.module('jetSkyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-update', {
        url: '/usuarios-update',
        template: '<usuarios-update></usuarios-update>'
      });
  });
