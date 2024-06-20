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
mongoose.connect(PLOY_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// console.log('process.env.PLOY_MONGO_URI -->' , process.env.PLOY_MONGO_URI)
const db = mongoose.connection;
db.on('error', (err) => console.log('MongoDB connection error:', err));
db.once('open', () => console.log('Connected to Database'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:8080', // front-end URL
    credentials: true, // allow cookies to be sent
  })
);
app.use(cookieParser()); //middleware to parse cookies

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// API routes

// login logic
app.post(
  '/api/login',
  userController.verifyUser,
  // cookieController.setSSIDCookie,
  (req, res) => {
  console.log('POST /api/login');
  res.status(200).json({ username: res.locals.user.username });
})

// sign up logic
app.post(
  '/api/signup',
  userController.createUser,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    console.log('POST /api/signup');
    res.status(200).json({ username: res.locals.user.username });
  });









app.post('/api/favorites', favController.addFavorite, (req, res) => {
  console.log('Added successfully');
  res.status(200).json({ favorite: res.locals.favList });
});

// Once user creates an account, Cookie created
// Route '/' will only be reached if the request does not match any static file
app.get('/', (req, res) => {
  console.log('RUNNING GET /');
  // res.sendFile(path.resolve(__dirname, '../src/components/SignUp'))
  res.sendStatus(400);
});

// app.post(
//   '/',
//   userController.createUser,
//   cookieController.setSSIDCookie,
//   // sessionController.startSession,
//   (req, res) => {
//     res.status(200).json(res.locals.user);
//   }
// );
//     res.status(201).json({ message: "User created successfully" });
//   }
// );

// Retrieve User's Login Input
// // app.get('/login', (req, res) => {
//   console.log('logging in')
// //   res.sendFile(path.resolve(__dirname, '../src/components/Login.js'))
// // })

// after form submission pass response thru middleware to verify, set ssid cookie and start thes session
// app.post(
//   '/api/login',
//   userController.verifyUser,
//   cookieController.setSSIDCookie,
//   // sessionController.startSession,
//   (req, res) => {
//     // check if the returning is in json format?
// res.status(200).json({ message: "welcome back" });
//   }
// );

// add into the favlist //POST
// app.post('/api/favlist', favController.addFavorite, (req, res) => {
//   res.status(200).json({ favorite: res.locals.favList });
// });

// get the fav list // GET
// app.get('/api/favlist' , userController.verifyUser , favController.getFavorite , (req , res) => {
//   res.status(200).json({ favList: res.locals.renderFavList });
// })
// //serve nutrition page when time button is clicked from home page
// app.get('/nutrition', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../src/components/Nutrition'))
// })

// //serve recipe page when time button is clicked from home page
// app.get('/recipe', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../src/components/Recipe'))
// })

// //serve timer page when time button is clicked from home page
// app.get('/timer', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../src/components/Timer'))
// })

// //serve account info page when account button is clicked from home page
// app.get('/account', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../src/components/Account'))
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
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  app,
  server,
  db,
};
