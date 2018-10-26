'use strict';

function tipoClientesService($resource, API) {
	return $resource(API + '/api/tipo_clientes/:id', {

	},
	{
		update:{
			method: 'PUT'
		}
	})
}

angular.module('jetSkyApp')
  .factory('tipoClientesService', tipoClientesService);
