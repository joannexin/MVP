angular.module('app.services', [])
.factory('viewallFactory', function($http) {

	var getStudents = function () {
    return $http({ method: "GET", url: "/students" }).then(function(resp) {
      return resp.data
    });
  }

  return {
    getStudents: getStudents
  }
})
