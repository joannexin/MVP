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

var students = [
	{name: 'Joanne', gender: 'female', url: '../assets/photos/joanne.jpg', rate: ""},
	{name: 'Sean', gender: 'male', url: '../assets/photos/sean.jpg', rate: ""},
	{name: 'Alex', gender: 'male', url: '../assets/photos/alex.png', rate: ""},
	{name: 'Alina', gender: 'female', url: '../assets/photos/alina.png', rate: ""},
	{name: 'Andrew', gender: 'male', url: '../assets/photos/andrew.png', rate: ""},
	{name: 'Bruna', gender: 'female', url: '../assets/photos/bruna.png', rate: ""},
	{name: 'Conor', gender: 'male', url: '../assets/photos/conor.png', rate: ""},
	{name: 'Chris', gender: 'male', url: '../assets/photos/chris.png', rate: ""},
	{name: 'David', gender: 'male', url: '../assets/photos/david.png', rate: ""},
	{name: 'Gerald', gender: 'male', url: '../assets/photos/gerald.png', rate: ""},
	{name: 'Jason', gender: 'male', url: '../assets/photos/jason.png', rate: ""},
	{name: 'Jeff', gender: 'male', url: '../assets/photos/jeff.png', rate: ""},
	{name: 'Jemil', gender: 'male', url: '../assets/photos/jemil.png', rate: ""},
	{name: 'Lizzie', gender: 'female', url: '../assets/photos/lizzie.png', rate: ""},
	{name: 'Masashi', gender: 'male', url: '../assets/photos/masashi.png', rate: ""},
	{name: 'Melba', gender: 'female', url: '../assets/photos/melba.png', rate: ""},
	{name: 'Michelle', gender: 'female', url: '../assets/photos/michelle.png', rate: ""},
	{name: 'Natasha', gender: 'female', url: '../assets/photos/natasha.png', rate: ""},
	{name: 'Nikki', gender: 'female', url: '../assets/photos/nikki.png', rate: ""},
	{name: 'Victor', gender: 'male', url: '../assets/photos/victor.png', rate: ""},
	{name: 'Zack', gender: 'male', url: '../assets/photos/zack.png', rate: ""}
];

app.get('/students', function(req, res) {
  // res.sendFile(path.join(__dirname, '../public/index.html'));
  res.send(200, students);
})

// app.post('/counter', function(req, res) {
//   // console.log('clicked');
//   // var body = req.body;
//   // console.log(body);
//   incrementDBCount(1);
//   // res.sendStatus(200).send(counter);
//   res.send(200, DATABASE.counter);
// });

// app.get('/viewall', function(req, res) {
// 	res.sendFile(path.join(__dirname, "../public/views/viewall/viewall.html"));
// })

// app.get('/info', function(req, res) {
// 	res.sendFile(path.join(__dirname, "../public/views/viewall/viewall.html"));
// })


app.listen(port);
console.log("Listening to port number " + port);
