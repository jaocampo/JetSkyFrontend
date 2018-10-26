'use strict';

(function(){

class UsuariosListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('jetSkyApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'usuariosListCtrl'
  });

})();
