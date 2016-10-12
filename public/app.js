var app = angular.module('app', [
	'app.ratings',
	'app.home',
	'app.viewall',
	'app.services',
	'ngRoute'
]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home/home.html',
		controller: 'homeController'
	})
	.when('/ratings', {
		templateUrl: 'views/ratings/rating.html',
		controller: 'ratingController'
	})
	.when('/students', {
		templateUrl: 'views/students/students.html',
		controller: 'viewallController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
