const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const logger = require('./middlewares/logger.js');
const timer = require('./middlewares/timer.js');

// This is how to setup a specific port number - the default would be 3000
const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// Anytime you want to use a middleware every time, we use app.use()
// The order of app.use()s is important
// app.use(logger);
app.use(timer)

let users = [
    { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
    { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
    { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
    { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
    { id: '5', name: 'canton', email: 'canton@me.com', password: '123' }
];

app.get('/', (req, res) => {
    // send writes a head for us
    // res.status(200).send('My First Express Server'); 

    // This code was written after the one above. This is for postman
    res.status(200).json({ confirmation: 'success', users });
});

app.listen(port, () => {
    console.log(`Listening on: ${port}`);
});

// lsof -i: 3000 for troubleshooting