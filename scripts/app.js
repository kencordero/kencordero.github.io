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
}]);
app.controller('libraryController', ['$scope', function($scope) {
    $('#bs-navvar-collapse ul li').removeClass('active');
    $('#menu-library').addClass('active');
    var db = new Dexie('library');
    db.version(1).stores({
        games: '++id, [title+platform], releaseYear, rating'
    });
    db.open().catch(function (e) {
        alert("Opening db failed: " + e); 
    });
    db.games.bulkPut([
        {title: 'Steve', platform: 'foo'},
        {title: 'Bob', platform: 'baz'}
    ]);
    db.games.toArray().then(function(d) {
        $scope.games = d;
    });    
}]);
app.controller('musicController', ['$scope', function($scope) {
	$('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-music').addClass('active');
    $('#videos iframe').hide();
    
    $('#menu-bach996-2').click(function() {
        $('#videos iframe').hide();
        $('#video-bach996-2').show();
    });
    $('#menu-bach999').click(function() {
        $('#videos iframe').hide();
        $('#video-bach999').show();
    });
    $('#menu-narvaez').click(function() {
        $('#videos iframe').hide();
        $('#video-narvaez').show();
    });                                                                                                                         
}]);

app.controller('gameController', ['$scope', function($scope) {
    $('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-game').addClass('active');
    
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
    $http.get('https://api.github.com/users/kencordero').then(function(response) {
        $scope.user = response.data;
    });
}]);

app.controller('contactController', ['$scope', function($scope) {
    $('#bs-navbar-collapse ul li').removeClass('active');
    $('#menu-contact').addClass('active');	
}]);