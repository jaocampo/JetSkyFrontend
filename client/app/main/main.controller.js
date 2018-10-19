'use strict';

(function() {

  class MainController {

    constructor($http) {
      
    }

    $onInit() {
     
    }
  }

  angular.module('jetSkyApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
