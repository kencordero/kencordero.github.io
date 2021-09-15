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
    
    // for reference: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
    var gameData = [
        { title: 'Metroid Prime', platform: 'Wii' },
        { title: 'Elder Scrolls III: Morrowind', platform: 'Windows' }
    ];
    
    //indexedDB boilerplate
    if (!window.indexedDB) {
        window.alert('Your browser does not support a stable version of IndexedDB.');
    }
    var request = window.indexedDB.open('libraryDB', 1);
    request.onerror = function (e) {
        window.alert('Something has gone amiss.');
    };
    request.onupgradeneeded = function (e) {
        var db = e.target.result,
            store = db.createObjectStore('games', { autoIncrement: true });
        store.createIndex('title', 'title', { unique: false });
        store.createIndex('platform', 'platform', { unique: false });
        
        store.transaction.oncomplete = function (e) {
            var i;
            var gameStore = db.transaction('customers', 'readwrite').objectStore('customers');
            for (i in gameData) {
                gameStore.add(gameData[i]);
            }
        };
    };
    request.onsuccess = function (e) {
        window.alert('Noice!');
    };
    
    var transaction = db.transaction(['games']);
    var store = transaction.objectStore('customers');
    var request = store.get('1');
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