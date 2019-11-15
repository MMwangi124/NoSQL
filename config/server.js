//setup -- declare some
var express =require('express');
var app =express(); //Creates our app w/ express
var mongoose = require('mongoose'); //for mongodb
var port = process.env.PORT || 8080 //sets for PORT
var database = require('./config/database');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config setups
mongoose.connect(database.localUrl); //connects to local database
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json()); //parses json file
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

//routes
require('./app/routes.js')(app);

//listener
app.listen(port);
console.log("App listener on port" + port)
