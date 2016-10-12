angular.module('app.ratings', [])
.controller('ratingController', function($scope, viewallFactory) {

	$scope.students = [];
  var getStudents = function() {
    viewallFactory.getStudents().then(function(data) {
			for(var key in data) {
				$scope.students.push(data[key])
			}
    })
  }
  getStudents();
})
.controller('form-controller', function($http, $scope) {
	$scope.hidden = true;
	$scope.show = function() {
		$scope.hidden = false;
	}

	$scope.submitForm = function(rate, id) {
		$scope.show();
		$scope.yourRate = rate;
		var rate = Number(rate);
		rateStudent(rate, id).then(function(data) {
			$scope.person = data;
		})
	}

	var rateStudent = function (rate, id) {
		return $http({ method: "POST", url: "/rate", data: { rate: rate, id: id } }).then(function(resp) {
			return resp.data
		});
	}
});
