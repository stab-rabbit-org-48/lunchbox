// Import necessary modules
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const app = express();

// Import controllers
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');


const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/LBdatabase', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
// Log a message once connected to MongoDB
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

const 


