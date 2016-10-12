angular.module('app', [
	'app.ratings',
	'app.viewall',
	'ngRoute'
])
.config(function($routeProvider) {
	$routeProvider
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
