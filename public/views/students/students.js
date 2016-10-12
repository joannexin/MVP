angular.module('app.viewall', [])
.controller('viewallController', function($scope, viewallFactory) {

	$scope.students = [];
  var getStudents = function() {
    viewallFactory.getStudents().then(function(data) {
      $scope.students = data;
    })
  }
  getStudents();


	$scope.hidden = true;
	$scope.show = function() {
		$scope.hidden = !$scope.hidden;
	}

})
.factory('viewallFactory', function($http) {

	var getStudents = function () {
    return $http({ method: "GET", url: "/students" }).then(function(resp) {
      return resp.data
    });
  }

  // var increaseCounter = function() {
  //   return $http({ method: "POST", data: {}, url: "/counter" }).then(function(resp) { return resp.data });
  // }

  return {
    getStudents: getStudents
  }
})