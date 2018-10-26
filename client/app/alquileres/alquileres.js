'use strict';

angular.module('jetSkyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('alquileres', {
        url: '/alquileres',
        template: '<alquileres></alquileres>'
      });
  });
