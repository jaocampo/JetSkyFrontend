'use strict';

function motosAcuaticasService($resource, API) {
	return $resource(API + '/api/motos_acuaticas/:id',{
		id:'@id'
	},
	{
		update:{
			method: 'PUT'
		}

	})

}

angular.module('jetSkyApp')
  .factory('motosAcuaticasService', motosAcuaticasService);
