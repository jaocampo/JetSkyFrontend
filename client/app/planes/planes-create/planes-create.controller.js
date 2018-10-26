'use strict';

(function(){

class PlanesCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('jetSkyApp')
  .component('planesCreate', {
    templateUrl: 'app/planes/planes-create/planes-create.html',
    controller: PlanesCreateComponent,
    controllerAs: 'planesCreateCtrl'
  });

})();
