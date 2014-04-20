define(['angular'], function (angular) {
	return angular.module('WoS.controllers', [])


	// A simple controller that fetches a list of data from a service
	.controller('WoSIndexCtrl', function($scope, dataService) {
	  // "Pets" is a service returning mock data (services.js)
	  $scope.grumpys = dataService.all();
	})


	// A simple controller that shows a tapped item's data
	.controller('WoSDetailCtrl', function($scope, $stateParams, dataService) {
	  // "Pets" is a service returning mock data (services.js)
	  $scope.grumpy = dataService.get($stateParams.petId);
	});
});
