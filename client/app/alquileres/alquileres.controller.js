'use strict';

(function(){

class AlquileresComponent {
  constructor(motosAcuaticasService, planesService, tipoClientesService) {
    this.motosAcuaticasService = motosAcuaticasService;
    this.planesService = planesService;
    this.tipoClientesService = tipoClientesService;
  }

  $onInit(){
  	this.tipoClientesService.query().$promise
  	.then(response => {
  		this.tipoCliente = response;
  		console.log("TIPOS CLIENTES => ", this.tipoCliente);
  	})
  	.catch( err => console.error("ERROR TIPO CLIENTES => ", err));

  	this.planesService.query().$promise
  	.then(response => {
  		this.planes = response;
  		console.log("PLANES => ", this.planes);
  	})
  	.catch( err => console.error("ERROR PLANES => ", err));

  	this.motosAcuaticasService.query().$promise
  	.then(response => {
  		this.motosAcuaticas = response;
  		console.log("MOTOS =>", this.motosAcuaticas);
  	})
  	.catch( err => console.error("ERROR =>", err));
  } // END $onInit

  rentarMoto(){
  	console.log("ALQUILER =>", this.alquiler);
  }

}

angular.module('jetSkyApp')
  .component('alquileres', {
    templateUrl: 'app/alquileres/alquileres.html',
    controller: AlquileresComponent,
    controllerAs: 'vm'
  });

})();
