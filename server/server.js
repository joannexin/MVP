var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
// var googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyALr-1jYUsM5_YFLYpbDuxTbuEUIsZJoUI'
// });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/modules', express.static(path.join(__dirname, '../node_modules')));

var port = process.env.port || 3000;

var students = {
	1: { id: 1, name: 'Joanne', gender: 'female', url: '../assets/photos/joanne.jpg', rating: { score: 0, count: 0} },
	2: { id: 2, name: 'Sean', gender: 'male', url: '../assets/photos/sean.jpg', rating: { score: 0, count: 0} },
	3: { id: 3, name: 'Alex', gender: 'male', url: '../assets/photos/alex.png', rating: { score: 0, count: 0} },
	4: { id: 4, name: 'Alina', gender: 'female', url: '../assets/photos/alina.png', rating: { score: 0, count: 0} },
	5: { id: 5, name: 'Andrew', gender: 'male', url: '../assets/photos/andrew.png', rating: { score: 0, count: 0} },
	6: { id: 6, name: 'Bruna', gender: 'female', url: '../assets/photos/bruna.png', rating: { score: 0, count: 0} },
	7: { id: 7, name: 'Conor', gender: 'male', url: '../assets/photos/conor.png', rating: { score: 0, count: 0} },
	8: { id: 8, name: 'Chris', gender: 'male', url: '../assets/photos/chris.png', rating: { score: 0, count: 0} },
	9: { id: 9, name: 'David', gender: 'male', url: '../assets/photos/david.png', rating: { score: 0, count: 0} },
	10: { id: 10, name: 'Gerald', gender: 'male', url: '../assets/photos/gerald.png', rating: { score: 0, count: 0} },
	11: { id: 11, name: 'Jason', gender: 'male', url: '../assets/photos/jason.png', rating: { score: 0, count: 0} },
	12: { id: 12, name: 'Jeff', gender: 'male', url: '../assets/photos/jeff.png', rating: { score: 0, count: 0} },
	13: { id: 13, name: 'Jemil', gender: 'male', url: '../assets/photos/jemil.png', rating: { score: 0, count: 0} },
	14: { id: 14, name: 'Lizzie', gender: 'female', url: '../assets/photos/lizzie.png', rating: { score: 0, count: 0} },
	15: { id: 15, name: 'Masashi', gender: 'male', url: '../assets/photos/masashi.png', rating: { score: 0, count: 0} },
	16: { id: 16, name: 'Melba', gender: 'female', url: '../assets/photos/melba.png', rating: { score: 0, count: 0} },
	17: { id: 17, name: 'Michelle', gender: 'female', url: '../assets/photos/michelle.png', rating: { score: 0, count: 0} },
	18: { id: 18, name: 'Natasha', gender: 'female', url: '../assets/photos/natasha.png', rating: { score: 0, count: 0} },
	19: { id: 19, name: 'Nikki', gender: 'female', url: '../assets/photos/nikki.png', rating: { score: 0, count: 0} },
	20: { id: 20, name: 'Victor', gender: 'male', url: '../assets/photos/victor.png', rating: { score: 0, count: 0} },
	21: { id: 21, name: 'Zack', gender: 'male', url: '../assets/photos/zack.png', rating: { score: 0, count: 0} }
};

app.get('/students', function(req, res) {
  // res.sendFile(path.join(__dirname, '../public/index.html'));
  res.send(200, students);
})

app.get('/winner', function(req, res) {
	var winner = getWinner();
  res.send(200, winner);
})

app.post('/rate', function(req, res) {
	updateRating(req.body.id, req.body.rate);
	var student = students[req.body.id];
  res.send(200, student);
});

var updateRating = function(id, score) {
	var rating = students[id].rating;
	var newCount = rating.count + 1;
	var newScore = (rating.score * rating.count + score) / newCount;
	rating.score = newScore;
	rating.count = newCount;
}

var getWinner = function() {
	var max = 0;
	var winner = {};
	for(var key in students) {
		var student = students[key];
		if (student.rating.score > max && student.rating.score != 0) {
			max = student.rating.score;
			winner = student;
		}
	}
	return winner;
}

// app.get('/viewall', function(req, res) {
// 	res.sendFile(path.join(__dirname, "../public/views/viewall/viewall.html"));
// })

// app.get('/info', function(req, res) {
// 	res.sendFile(path.join(__dirname, "../public/views/viewall/viewall.html"));
// })


app.listen(port);
console.log("Listening to port number " + port);
