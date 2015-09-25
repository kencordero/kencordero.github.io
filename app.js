var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller:	'homeController'
	})
	.when('/music', {
		templateUrl: 'pages/music.html',
		controller: 'musicController'
	})	
});

app.controller('homeControler', ['$scope', function($scope) {
	console.log('Home');
}]);

app.controller('musicController', ['$scope', function($scope) {
	console.log('Music');
}]);