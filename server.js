const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require("path");
var request = require('request');

// Set up the Express app
const app = express();

// If you want to connect to MongoDB - should be running locally
// mongoose.connect('mongodb://localhost/');
// mongoose.Promise = global.Promise;

// Set up static files
app.use(express.static('public'));

// Use body-parser to parse HTTP request parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err); // To see properties of message in our console
    res.status(422).send({error: err.message});
});

var port = process.env.PORT || 3000;

// Starts the Express server, which will run locally @ localhost:3000
app.listen(port, () => {
    console.log('App listening on port 3000!');
});

// Serves the index.html file (our basic frontend)
app.get('/',(req, res) => {   
	res.sendFile('index.html', {root: __dirname});
}); 