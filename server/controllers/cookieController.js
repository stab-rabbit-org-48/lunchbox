// Importing "User" to get Access
const User = require("../models/userModel");
const cookieController = {};

// Set cookie with a randome number
cookieController.setSSIDCookie = (req, res, next) => {
    console.log('adding cookies');
    res.cookie('ssid', res.locals.user._id, {httpOnly: true})
    return next();
}

module.exports = cookieController;