const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

app.get('/', (req, res) => {
	res.send('hello');
});

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(3000, () => console.log('server starting...'))