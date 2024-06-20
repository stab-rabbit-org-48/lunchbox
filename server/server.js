const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');
const favController = require('./controllers/favController');
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
// app.get('/', (req, res) => {
//   console.log('HERE');
//   res.sendFile(path.resolve(__dirname, '../src/components/SignUp'))
// })

app.post(
  '/api/signup',
  userController.createUser,
  // cookieController.setSSIDCookie ,
  // sessionController.startSession,
  (req, res) => {
    res.status(201).json({ message: "User created successfully" });
  }
);

// Retrieve User's Login Input
// app.get('/login', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../src/components/Login'))
// })

// after form submission pass response thru middleware to verify, set ssid cookie and start thes session
app.post(
  '/api/login',
  userController.verifyUser,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    // check if the returning is in json format?
    res.status(200).json({ message: "welcome back" });
  }
);

// add into the favlist //POST
app.post('/api/favlist', favController.addFavorite, (req, res) => {
  res.status(200).json({ favorite: res.locals.favList });
});


// get the fav list // GET
// app.get('/api/favlist' , userController.verifyUser , favController.getFavorite , (req , res) => {
//   res.status(200).json({ favList: res.locals.renderFavList });
// })

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