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
	.when('/game', {
		templateUrl: 'pages/LongNight-WebBuild.html',
		controller: 'gameController'
	})
	.when('about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
	.when('contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
});

app.controller('homeControler', ['$scope', function($scope) {
	console.log('Home');
}]);
app.controller('musicController', ['$scope', function($scope) {
	console.log('Music');
}]);
app.controller('gameController', ['$scope', function($scope) {
	console.log('Game');
}]);
app.controller('aboutController', ['$scope', function($scope) {
	console.log('About');
}]);
app.controller('contactController', ['$scope', function($scope) {
	console.log('Contact');
}]);