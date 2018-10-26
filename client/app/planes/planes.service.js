'use strict';

function planesService($resource, API) {
	return $resource(API + '/api/planes/:id', {

	},
	{
		update:{
			method: 'PUT'
		}
	})
}

angular.module('jetSkyApp')
  .factory('planesService', planesService);
