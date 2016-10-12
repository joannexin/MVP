angular.module('app.home', [])
.controller('homeController', function($http, $scope) {
	$scope.winner = {};

	getWinner().then(function(data) {
		$scope.winner = data;
	})

	function getWinner() {
		return $http({ method: "GET", url: "/winner" }).then(function(resp) {
			return resp.data
		});
	}
});
