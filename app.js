const express = require('express');
const pug = require('pug');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const app = express();


// connect to mongoDB
mongoose.connect(keys.dbURL);

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true });
	
// set up view engine 'pug'
app.set('view engine', 'pug');

// set up the path for static files like css / js
app.use('/public', express.static('public'));

// render main page
app.get('/', (req, res)=>{
	res.render('index');
})
// Routing
app.use(userRoutes);

// app server
app.listen(8000, (req, res)=>{
	console.log('this app now listening on port 8000');
})
