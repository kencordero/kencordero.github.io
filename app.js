

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
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
});

app.controller('homeController', ['$scope', function($scope) {
    $("li").removeClass("active");
    $("#menu-home").addClass("active");
	console.log('Home');
}]);
app.controller('musicController', ['$scope', function($scope) {
	$("li").removeClass("active");
    $("#menu-music").addClass("active");
    console.log('Music');
}]);
app.controller('gameController', ['$scope', function($scope) {
    $("li").removeClass("active");
    $("#menu-game").addClass("active");
	console.log('Game');
}]);
app.controller('aboutController', ['$scope', function($scope) {
    $("li").removeClass("active");
    $("#menu-about").addClass("active");
	console.log('About');
}]);
app.controller('contactController', ['$scope', function($scope) {
    $("li").removeClass("active");
    $("#menu-contact").addClass("active");
	console.log('Contact');
}]);