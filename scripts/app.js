var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller:	'homeController'
	})
    .when('/library', {
        templateUrl: 'pages/library.html',
        controller: 'libraryController'
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
app.controller('dateController', ['$scope', function($scope) {
    $scope.currentYear = new Date().getFullYear();
}]);
app.controller('homeController', ['$scope', function($scope) {
    $('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-home').addClass('active');
	console.log('Home');
}]);

app.controller('libraryController', ['$scope', function($scope) {
    $('#bs-navvar-collapse ul li').removeClass('active');
    $('#menu-library').addClass('active');
    console.log('Library');
}]);

app.controller('musicController', ['$scope', function($scope) {
	$('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-music').addClass('active');
    console.log('Music');
    $('#videos iframe').hide();
    
    $('#menu-bach996-2').click(function() {
        $('#videos iframe').hide();
        $('#bach996-2').show();
    });
    $('#menu-bach999').click(function() {
        $('#videos iframe').hide();
        $('#bach999').show();
    });
    $('#menu-guardame').click(function() {
        $('#videos iframe').hide();
        $('#guardame').show();        
    });                                                                                                                         
}]);

app.controller('gameController', ['$scope', function($scope) {
    $('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-game').addClass('active');
	console.log('Game');
    
    var config = {
	   width: 960, 
	   height: 600,
	   params: { enableDebugging:'0' }				
    };
	var u = new UnityObject2(config);

	jQuery(function() {
	   var $missingScreen = jQuery('#unityPlayer').find('.missing');
	   var $brokenScreen = jQuery('#unityPlayer').find('.broken');
	   $missingScreen.hide();
	   $brokenScreen.hide();
				
	   u.observeProgress(function (progress) {
           switch(progress.pluginStatus) {
               case 'broken':
                   $brokenScreen.find('a').click(function (e) {
                       e.stopPropagation();
				       e.preventDefault();
				       u.installPlugin();
                       return false;
                   });
			
                   $brokenScreen.show();
                   break;
                case 'missing':
                    $missingScreen.find('a').click(function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        u.installPlugin();
                        return false;
                    });
                    $missingScreen.show();
                    break;
                case 'installed':
                    $missingScreen.remove();
                    break;
                case 'first':
                    break;
            }   
        });
        u.initPlugin(jQuery('#unityPlayer')[0], 'assets/LongNight-WebBuild.unity3d');
	});	
}]);

app.controller('aboutController', ['$scope', '$http', function($scope, $http) {
    $('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-about').addClass('active');
	console.log('About');
    $http.get('https://api.github.com/users/kencordero').then(function(response) {
        $scope.user = response.data;
    });
}]);

app.controller('contactController', ['$scope', function($scope) {
    $('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-contact').addClass('active');
	console.log('Contact');
}]);