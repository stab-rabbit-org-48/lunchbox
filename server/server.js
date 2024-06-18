const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

//const PORT = 3000;

// Connect to MongoDB

// const PLOY_MONGO_URI = process.env.PLOY_MONGO_URI;
// mongoose.connect(PLOY_MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });


const PORT = process.env.PORT || 3000;
const PLOY_MONGO_URI = process.env.PLOY_MONGO_URI;

mongoose.connect(PLOY_MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//middleware to parse cookies
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// API routes
// Once user creates an account, Cookie created
app.get('/', (req, res) => {
  console.log('HERE');
  res.sendFile(path.resolve(__dirname, '../src/components/SignUp'))
})

app.post(
  '/',
  userController.createUser,
  cookieController.setSSIDCookie ,
  // sessionController.startSession,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

// Retrieve User's Login Input
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/components/Login'))
})

// after form submission pass response thru middleware to verify, set ssid cookie and start thes session
app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    // check if the returning is in json format?
    res.status(200).json({ message: "welcome back" });
  }
);

//serve nutrition page when time button is clicked from home page
app.get('/nutrition', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/components/Nutrition'))
})

//serve recipe page when time button is clicked from home page
app.get('/recipe', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/components/Recipe'))
})

//serve timer page when time button is clicked from home page
app.get('/timer', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/components/Timer'))
})

//serve account info page when account button is clicked from home page
app.get('/account', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/components/Account'))
})

// Catch-all route to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
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