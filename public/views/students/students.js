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
