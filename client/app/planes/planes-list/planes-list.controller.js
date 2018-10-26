'use strict';

(function(){

class PlanesListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('jetSkyApp')
  .component('planesList', {
    templateUrl: 'app/planes/planes-list/planes-list.html',
    controller: PlanesListComponent,
    controllerAs: 'planesListCtrl'
  });

})();
