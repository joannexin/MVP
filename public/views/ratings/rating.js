angular.module('app.ratings', [])
.controller('ratingController', function($scope, viewallFactory) {

	$scope.students = [];
  var getStudents = function() {
    viewallFactory.getStudents().then(function(data) {
      $scope.students = data;
    })
  }
  getStudents();

	$scope.submitForm = function(rate) {

	}

})
.controller('form-controller', function($scope) {
	$scope.hidden = true;
	$scope.show = function() {
		$scope.hidden = false;
	}

	$scope.submitForm = function(rate) {
		$scope.show();
		$scope.yourRate = rate;
	}
});
