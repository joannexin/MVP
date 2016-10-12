angular.module('app.ratings', [])
.controller('ratingController', function($scope) {

	$scope.info = [
		{name: 'Joanne', gender: 'female', url: 'assests/photos/joanne.jpg', rate: ""},
		{name: 'Sean', gender: 'male', url: 'assests/photos/sean.jpg', rate: ""},
		{name: 'Alex', gender: 'male', url: 'assests/photos/alex.png', rate: ""},
		{name: 'Alina', gender: 'female', url: 'assests/photos/alina.png', rate: ""},
		{name: 'Andrew', gender: 'male', url: 'assests/photos/andrew.png', rate: ""},
		{name: 'Bruna', gender: 'female', url: 'assests/photos/bruna.png', rate: ""},
		{name: 'Conor', gender: 'male', url: 'assests/photos/conor.png', rate: ""},
		{name: 'Chris', gender: 'male', url: 'assests/photos/chris.png', rate: ""},
		{name: 'David', gender: 'male', url: 'assests/photos/david.png', rate: ""},
		{name: 'Gerald', gender: 'male', url: 'assests/photos/gerald.png', rate: ""},
		{name: 'Jason', gender: 'male', url: 'assests/photos/jason.png', rate: ""},
		{name: 'Jeff', gender: 'male', url: 'assests/photos/jeff.png', rate: ""},
		{name: 'Jemil', gender: 'male', url: 'assests/photos/jemil.png', rate: ""},
		{name: 'Lizzie', gender: 'female', url: 'assests/photos/lizzie.png', rate: ""},
		{name: 'Masashi', gender: 'male', url: 'assests/photos/masashi.png', rate: ""},
		{name: 'Melba', gender: 'female', url: 'assests/photos/melba.png', rate: ""},
		{name: 'Michelle', gender: 'female', url: 'assests/photos/michelle.png', rate: ""},
		{name: 'Natasha', gender: 'female', url: 'assests/photos/natasha.png', rate: ""},
		{name: 'Nikki', gender: 'female', url: 'assests/photos/nikki.png', rate: ""},
		{name: 'Victor', gender: 'male', url: 'assests/photos/victor.png', rate: ""},
		{name: 'Zack', gender: 'male', url: 'assests/photos/zack.png', rate: ""}
	];


	$scope.list = [];
	$scope.rate = "";
	$scope.submitForm = function() {
		$scope.list.push(this.rate);
		$scope.rate = "";
	}

	$scope.hidden = true;
	$scope.show = function() {
		$scope.hidden = !$scope.hidden;
	}

});
