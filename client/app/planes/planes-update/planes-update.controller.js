'use strict';

(function(){

class PlanesUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('jetSkyApp')
  .component('planesUpdate', {
    templateUrl: 'app/planes/planes-update/planes-update.html',
    controller: PlanesUpdateComponent,
    controllerAs: 'planesUpdateCtrl'
  });

})();
