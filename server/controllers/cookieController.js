// Importing "User" to get Access
const User = require('../models/userModel');
const cookieController = {};

// Set cookie with a randome number
cookieController.setSSIDCookie = (req, res, next) => {
  console.log('adding cookies');
  console.log('res.locals.user:', res.locals.user.username);
  res.cookie('username', res.locals.user.username, { httpOnly: true });
  res.cookie('codesmith', 'hello', { httpOnly: true });
  res.cookie('ssid', 'fake ID', { httpOnly: true });
  return next();
};

module.exports = cookieController;
