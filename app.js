const express = require('express');
const pug = require('pug');
const userRoutes = require('./routes/user-routes');

const app = express();


// set up view engine 'pug'
app.set('view engine', 'pug');
// set up the path for static files like css / js
app.use('/public', express.static('public'));

app.get('/', (req, res)=>{
	res.render('index');
})
app.get('/profile', userRoutes);

// app server
app.listen(8000, (req, res)=>{
	console.log('this app now listening on port 8000');
})