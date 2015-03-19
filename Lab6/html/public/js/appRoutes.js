angular.module('appRoutes',[]).config(function($routeProvider, $locationProvider)
{
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'views/home.html',
		controller  : 'mainController'
	})

	// route for the login page
	.when('/login', {
		templateUrl : 'views/login.html',
		controller  : 'loginController'
	})
	.otherwise({
      redirectTo: '/'
   	});

	$locationProvider.html5Mode(true);
});