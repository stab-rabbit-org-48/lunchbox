// Import necessary modules
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
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

//route to serve the static files in the assets dir
app.use('/src', express.static(path.resolve(__dirname, '../src/assets')));

//route to serve the static files in dist dir
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

//route to serve the signUp.html file
app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/assets/signUp.html'));
});

//route to login page after signup form submission
app.post('/signup', userController.createUser, (req, res) => {
  res.redirect('/login');
});

//route to serve the login.html
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/components/login.html'));
});

//route to home page after login form submission
app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.redirect('/home');
  }
);

//route to serve home page
app.get('/home', sessionController.isLoggedIn, (req, res) => {
  res.sendFile(path.resolve(__dirname, '/src/components/Home.js'));
});

//unknown route handler
app.use((req, res) => res.sendStatus(404));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
